const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@1234",
    database:"nimaptestdb"
});

db.connect(err => {
    if(err){
        console.error("Error: ", err.message);
        throw err;
    }
    console.log("Database connected successfully.");
});

module.exports = db;