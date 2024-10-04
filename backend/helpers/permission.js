const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
  const user = await userModel.findById(userId);
  //Kiểm tra quyền hạn
  if (user.role === "ADMIN") {
    return true;
  }

  return false;
};

module.exports = uploadProductPermission;
