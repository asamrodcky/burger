var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database

connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'burgers_db'
})

module.exports = connection;