const User = require("../models/user.js");
const sql = require("../utils/db.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const { username, password, email } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: password,
    create_time: new Date(),
  });
  sql.query("INSERT INTO user SET ?", user, (err, response) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send({
        message: err.message || "failed to create",
      });
      return;
    }
    console.log("res", res);
    res.send({ id: response.insertId, ...user });
  });
};
