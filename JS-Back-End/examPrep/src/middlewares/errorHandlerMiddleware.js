const { getErrorMessage } = require("../utils/errorHeleps");

exports.errorHandler = (err, req, res) => {
  res.render("/404", {erorr: getErrorMessage(err)})  
};
