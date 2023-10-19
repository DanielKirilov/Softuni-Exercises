const User = require("../models/User");
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");

const SECRET = "cc4141c4-6ebf-11ee-b962-0242ac120002";

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

  const payload = { _id: user._id, username: user.username, email: user.email };

  const token = await jwt.sign(payload, SECRET, {expiresIn: "2d"});
  return token
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.userName });

  if (user) {
    throw new Error("Username is already taken!");
  }
  return User.create(userData);
};
