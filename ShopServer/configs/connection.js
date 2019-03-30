var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'StoreDB',
    port: '8889'
  });

exports.connection = connection;

