import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  experience: { type: Number, required: true },
});

export default mongoose.model("Driver", driverSchema);
