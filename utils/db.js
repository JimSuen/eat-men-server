const mySql = require("mysql");
const dbConfig = require("../configs/db.js");

const connection = mySql.createConnection(dbConfig);

module.exports = connection;
