const mysql = require("mysql2/promise");
// Normally I would use a dotenv file but for the sake of this
// exercise I will leave the code the way it is for simplicity

const pool = mysql.createPool({
  host: "localhost", // change this to your MySQL server hostname
  user: "root", // make sure this matches your MySQL username
  password: "password", // Be sure to change this to your MySQL password
  database: "my_api_db", // make sure to change to the database you created
});

module.exports = {
  query: (sql, params) => pool.execute(sql, params),
};
