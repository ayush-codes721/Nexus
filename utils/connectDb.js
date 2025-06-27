
import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/nexus', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // exit the process if connection fails
  }
};

