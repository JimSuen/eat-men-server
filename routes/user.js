var express = require("express");
var router = express.Router();
const user = require("../controllers/user.js");

router.post("/create", user.create);

module.exports = router;
