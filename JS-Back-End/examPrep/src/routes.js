const router = require("express").Router();

const homeController = require("./controllers/homeController")

router.use("/home", homeController);

module.exports = router