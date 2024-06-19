import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import { handleGenerateToken } from "../utils/utils.js";
/**
 * ? Signup Controller
 **/
export const handleSignUp = async (req, res) => {
  // spem
  try {
    const { email, fullName, password, birthDate, gender } = req.body;
    const body = req.body;
    for (const key in body) {
      if (!body[key]) {
        res.send({
          status: false,
          message: `Please Fill the ${key} field`,
        });
        return;
      }
    }
    if (password.trim().length < 8) {
      return res.status(400).send({
        status: false,
        message: `Password should be greater than 8 characters`,
      });
    }
    const find = await userModel.findOne({ email });
    if (find) {
      return res.status(400).send({
        status: false,
        message: `Email already existed`,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const maleProfilePic = "https://avatar.iran.liara.run/public/boy";
    const femaleProfilePic = "https://avatar.iran.liara.run/public/girl";
    const profilePic = gender === "male" ? maleProfilePic : femaleProfilePic;
    const newUser = await userModel.create({
      email,
      fullName,

      password: hashPassword,
      birthDate,
      gender,
      profilePic,
    });
    res.status(201).send({
      status: true,
      message: `User created Successfully`,
      user: {
        id: newUser?._id,
        email: newUser?.email,
        fullName: newUser?.fullName,
        birthDate: newUser?.birthDate,
        gender: newUser?.gender,
        profilePic: newUser?.profilePic,
        createdAt: newUser?.createdAt,
        updatedAt: newUser?.updatedAt,
      },
    });
  } catch (err) {
    console.log("handleSignUp error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Login Controller
 **/
export const handleLoginUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await userModel.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(400).send({
        status: false,
        message: "Invalid Credentials",
      });
    }
    const samePassword = await bcrypt.compare(password, user?.password);
    console.log(samePassword);
    if (!samePassword) {
      return res.status(400).send({
        status: false,
        message: "Invalid Credentialsssss",
      });
    }
    const token = handleGenerateToken(user._id);
    console.log(token);
    delete user?.password;
    res.status(200).send({
      status: true,
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Logout Controller
 **/
export const handleLogout = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Logout Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
