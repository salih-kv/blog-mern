import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("SERVER CONNECTED @", connection.host);
  } catch (err) {
    console.log(err.message);
  }
};
