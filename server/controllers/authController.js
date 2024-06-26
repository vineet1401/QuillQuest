const { generateToken } = require("../middlewares/authMiddleware");
const UserModel = require("../models/user.model")

exports.postLogin = async (req, res) => {
  const formData = req.body;
  try {
    const user = await UserModel.findOne({ email: formData.email })

    // console.log(user);
    if (!user) {
      return res.status(400).send({ success: false, message: "User not found" })
    }
    if (user.password !== formData.password) {
      return res.status(401).send({ success: false, message: "Incorrect password" })
    }
    const token = generateToken(user._id);
    console.log(token)
    const { password, ...data } = user._doc;
    return res.status(200).send({ success: true, message: "Login successful", data: data, token: token });

  } catch (error) {
    console.log("error in authController -> postLogin: " + error)
    return res.status(500).send({ success: false, message: "Please try again" });
  }
}

exports.postSignup = async (req, res) => {
  const formData = req.body;
  console.log(formData)
  try {
    const existUser = await UserModel.findOne({ email: formData.email })
    if (existUser) {
      return res.status(400).send({ success: false, message: "User already Exist" })
    }
    const newUser = await UserModel.create(formData);
    if (!newUser) {
      return res.status(500).send({ success: false, message: "Please try again" });

    }
    const { password, ...data } = newUser._doc;
    const token = generateToken(newUser._id);
    return res.status(200).send({ success: true, message: "Signup successful", data: data, token: token });
    
  } catch (error) {
    console.log("error in authController -> postLogin: " + error)
    return res.status(500).send({ success: false, message: "Please try again" });
    
  }
}

exports.getLogout = async(req, res)=> {
  return res.status(200).send({ success: true, message: "Logout successful" });
  
}

