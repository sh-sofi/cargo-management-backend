import express from "express";
import "./config/db.js";

import drivers from "./routes/drivers.js";
import routes from "./routes/routes.js";
import works from "./routes/works.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/api", drivers);
app.use("/api", routes);
app.use("/api", works);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
