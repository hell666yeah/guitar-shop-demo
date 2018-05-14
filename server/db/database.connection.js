const mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "guitar_shop"
});

module.exports = con;
