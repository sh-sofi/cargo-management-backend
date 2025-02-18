import mongoose from "mongoose";

const completedWorkSchema = new mongoose.Schema({
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  departureDate: { type: Date, required: true }, // Дата відправлення
  returnDate: { type: Date, required: true }, // Дата повернення
  bonus: { type: Number, required: true }, // Премія
});

export default mongoose.model("CompletedWork", completedWorkSchema);
