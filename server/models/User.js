import mongoose from "mongoose";
import { compare, hash } from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: [true, "UserName is required"],
      unique: true,
      trim: true, //  remove any leading or trailing whitespace
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false, // exclude password when query the user
    },
    bio: {
      type: String,
      maxlength: 160,
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt Password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 12);
  next();
});

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
