import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required" });
    }
    const exitingUser = await userModel.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const role = "user";

    const newUser = new userModel({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    const saveUser = await newUser.save();
    const generateToken = (payload) => {
      return jwt.sign(payload, process.env.MONGO_URI, { expiresIn: "7h" });
    };
    const token = generateToken({
      id: saveUser.id,
      email: saveUser.email,
      fullName: saveUser.fullName,
      role: saveUser.role,
    });
    res
      .status(201)
      .json({ message: "User registered successfully!", token, role });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: " Login not found." });
    }
    const exitingUser = await userModel.findOne();
    if (!exitingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const inPassword = await bcrypt.hash(password, exitingUser.password);
    if (!inPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { id: exitingUser.id, role: exitingUser.role },
      process.env.MONGO_URI,
      { expiresIn: "7h" }
    );
    res.status(200).json({
      message: "Login successfull",
      token,
    });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "User not found." });
    }
    res.status(200).json(users);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const getByIdUser = async (req, res) => {
  try {
    const userById = await userModel.findById(req.params.id);
    if (!userById)
      return res.status(404).json({ message: "userById not found." });
    res.status(200).json(userById);
  } catch (err) {
    console.log(err, "error");
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid data." });
    }
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const updateByIdUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "updateUser not found." });
    }
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err, "error");
    if (err.kind === "ObjectId")
      return res.status(404).json({ message: "Invalid data." });
  }
  res.status(500).json({ message: "Interal sever not found." });
};

export const deleteByIdUser = async (req, res) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "deletUser not found." });
    }
    res
      .status(200)
      .json({ message: "delete user successfull", user: this.deleteUser });
  } catch (err) {
    console.log(err, "error");
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid data." });
    }
  }
};
