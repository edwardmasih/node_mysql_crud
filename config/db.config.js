require('dotenv').config()
const mysql = require("mysql2");

// mySQL connection
const dbConn = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

dbConn.connect((err)=>{
    if(err) throw err;
    else {
        console.log("DB connection successful!")
    }
})

module.exports = dbConn;
