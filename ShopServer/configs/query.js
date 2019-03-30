var db = require('./connection');

var conn = db.connection;

conn.connect(function(err) {
    console.log('DB Connected ..');
});

exports.insertion = async function (cmd,callback){
    conn.query(cmd,callback);
}

exports.select = async function (cmd,callback){
    conn.query(cmd,callback);
}

exports.delete = async function (cmd,callback){
    conn.query(cmd,callback);
}

exports.update = async function (cmd,callback){
    conn.query(cmd,callback);
}