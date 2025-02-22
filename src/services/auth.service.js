import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { JWT_SECRET } from "../config/db.js";

export const registerUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  return user.save();
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token, user };
};
