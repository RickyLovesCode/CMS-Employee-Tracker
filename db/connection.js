const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "icanCODE247365days",
    database: "cms_db"
});

module.exports = db;