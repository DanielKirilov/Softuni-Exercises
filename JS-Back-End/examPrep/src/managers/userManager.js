const User = require("../models/User");

exports.login = (username, password) => {
  //
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.userName });

  if (user) {
    throw new Error("Username is already taken!");
  }
  return User.create(userData);
};
