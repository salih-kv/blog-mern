import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { errorHandler } from "../utils/errorHandler.js";

// Generate Token
const generateToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Sign up
export const signUp = async (req, res, next) => {
  const { name, email, username, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      if (user.username === username) {
        return next(errorHandler(401, "Username already exists"));
      }
      return next(errorHandler(401, "Email already exists"));
    }

    await User.create({
      name,
      email,
      username,
      password,
    });

    // write code to set cookie

    res.status(200).json({
      status: true,
      message: "User created successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Login
export const login = async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: userId }, { username: userId }],
    }).select("+password");

    if (!user) {
      return next(errorHandler(401, "User doesn't exist"));
    }

    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return next(errorHandler(401, "Password doesn't match"));
    }

    const token = generateToken(user._id);

    // write code to set cookie

    res.status(200).json({
      status: true,
      message: "login successfully",
      token,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// Logout
export const logout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Google Auth
