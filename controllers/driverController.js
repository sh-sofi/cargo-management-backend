import Driver from "../models/Driver.js";

export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findById(id);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const addDriver = async (req, res) => {
  const { lastName, firstName, middleName, experience } = req.body;

  if (!lastName || !firstName || !middleName || !experience) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newDriver = new Driver({ lastName, firstName, middleName, experience });

  try {
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const { lastName, firstName, middleName, experience } = req.body;

  try {
    const updatedDriver = await Driver.findByIdAndUpdate(
      id,
      { lastName, firstName, middleName, experience },
      { new: true }
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json(updatedDriver);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const deleteDriver = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDriver = await Driver.findByIdAndDelete(id);

    if (!deletedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json({ message: "Driver deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};
