const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email });

    console.log("user", user);

    if (user) {
      throw new Error("Người dùng đã tồn tại !!");
    }

    if (!email) {
      throw new Error("Vui Lòng nhập Email !!");
    }
    if (!password) {
      throw new Error("Vui Lòng nhập mật khẩu!!");
    }
    if (!name) {
      throw new Error("Vui Lòng nhập name!!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Mật khẩu không khớp !!");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "Đăng kí thành công !",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
