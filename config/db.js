import mongoose from "mongoose";
import configuration from "./configuration.js";

export const MONGO_URI = configuration.MONGO_URI;
export const JWT_SECRET = configuration.JWT_SECRET;
export const PORT = configuration.PORT;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("Connection error:", e));
