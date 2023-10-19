const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.login = async (username, password) => {
  //find user
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid user or password!");
  }
  //check pass
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid user or password!");
  }

  
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.userName });

  if (user) {
    throw new Error("Username is already taken!");
  }
  return User.create(userData);
};
