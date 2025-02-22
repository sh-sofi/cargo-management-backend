import express from "express";
import "./src/config/db.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import drivers from "./src/routes/drivers.js";
import routes from "./src/routes/routes.js";
import works from "./src/routes/works.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.use("/api", drivers);
app.use("/api", routes);
app.use("/api", works);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
