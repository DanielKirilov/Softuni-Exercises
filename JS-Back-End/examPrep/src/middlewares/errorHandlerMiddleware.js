const { getErrorMessage } = require("../utils/errorHelpers");

exports.errorHandler = (err, req, res) => {
  res.render("/404", {erorr: getErrorMessage(err)})  
};
