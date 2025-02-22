import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  distance: { type: Number, required: true },
  daysOnRoad: { type: Number, required: true },
  payment: { type: Number, required: true },
});

export default mongoose.model("Route", routeSchema);
