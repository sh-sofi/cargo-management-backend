import { registerUser, loginUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await registerUser(username, email, password);
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
