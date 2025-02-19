import mongoose from "mongoose";
import configuration from "./configuration.js";

const URI = configuration.mongoUri;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("Connection error:", e));
