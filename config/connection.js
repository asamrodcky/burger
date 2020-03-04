var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database

CLEARDB_URL = {
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'b33f62c1def585',
  password : '2d5d0836',
  database : 'heroku_f948ce4dd39346b'
}

connection = mysql.createConnection(process.env.CLEARDB_URL || {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'burgers_db'
})

module.exports = connection;