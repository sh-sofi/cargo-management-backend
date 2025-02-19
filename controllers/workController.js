import CompletedWork from "../models/CompletedWork.js";

export const getAllCompletedWorks = async (req, res) => {
  try {
    const completedWorks = await CompletedWork.find().populate("route drivers");
    res.status(200).json(completedWorks);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const getCompletedWorkById = async (req, res) => {
  try {
    const { id } = req.params;
    const completedWork = await CompletedWork.findById(id).populate(
      "route drivers"
    );

    if (!completedWork) {
      return res.status(404).json({ message: "Completed work not found" });
    }

    res.status(200).json(completedWork);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const addCompletedWork = async (req, res) => {
  const { route, drivers, departureDate, returnDate, paymentBonus, finalSum } =
    req.body;

  if (!route || !drivers || !departureDate || !returnDate || !finalSum) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided" });
  }

  const newCompletedWork = new CompletedWork({
    route,
    drivers,
    departureDate,
    returnDate,
    paymentBonus: paymentBonus || 0,
    finalSum,
  });

  try {
    await newCompletedWork.save();
    res.status(201).json(newCompletedWork);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const updateCompletedWork = async (req, res) => {
  const { id } = req.params;
  const { route, drivers, departureDate, returnDate, paymentBonus, finalSum } =
    req.body;

  try {
    const updatedCompletedWork = await CompletedWork.findByIdAndUpdate(
      id,
      { route, drivers, departureDate, returnDate, paymentBonus, finalSum },
      { new: true }
    ).populate("route drivers");

    if (!updatedCompletedWork) {
      return res.status(404).json({ message: "Completed work not found" });
    }

    res.status(200).json(updatedCompletedWork);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const deleteCompletedWork = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCompletedWork = await CompletedWork.findByIdAndDelete(id);

    if (!deletedCompletedWork) {
      return res.status(404).json({ message: "Completed work not found" });
    }

    res.status(200).json({ message: "Completed work deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};
