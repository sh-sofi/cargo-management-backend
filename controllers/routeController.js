import Route from "../models/Route.js";

export const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const getRouteById = async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findById(id);

    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json(route);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const addRoute = async (req, res) => {
  const { name, distance, daysOnRoad, payment } = req.body;

  if (!name || !distance || !daysOnRoad || !payment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newRoute = new Route({
    name,
    distance,
    daysOnRoad,
    payment,
  });

  try {
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
    console.log(err);
  }
};

export const updateRoute = async (req, res) => {
  const { id } = req.params;
  const { name, distance, daysOnRoad, payment } = req.body;

  try {
    const updatedRoute = await Route.findByIdAndUpdate(
      id,
      { name, distance, daysOnRoad, payment },
      { new: true }
    );

    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json(updatedRoute);
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};

export const deleteRoute = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoute = await Route.findByIdAndDelete(id);

    if (!deleteRoute) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json({ message: "Route deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message:
        "The request was not completed. The server met an unexpected condition",
    });
  }
};
