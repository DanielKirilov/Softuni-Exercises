const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./routes");
const cookieParser = require("cookie-parser");

const { auth } = require("./middlewares/authMiddleware");
const {errorHandler} = require("./middlewares/errorHandlerMiddleware")
const app = express();

// TODO: CHANGE DATABASE NAME
mongoose
  .connect("mongodb://127.0.0.1:27017/petstagram")
  .then(() => console.log("DB conncted successfully"))
  .catch((err) => console.log("DataBase error: ", err));
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);
//app.use(errorHandler)

app.listen(3000, console.log("Server is listening on port 3000"));
