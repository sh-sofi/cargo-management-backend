import mongoose from "mongoose";

const completedWorkSchema = new mongoose.Schema({
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  drivers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },
  ],
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  paymentBonus: { type: Number, default: 0 },
  finalSums: [
    {
      type: Number,
      required: true
    }
  ],
});

export default mongoose.model("CompletedWork", completedWorkSchema);
