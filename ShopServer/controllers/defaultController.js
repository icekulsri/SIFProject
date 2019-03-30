var _ = require('lodash');
var db = require('../configs/query');
var mysql = require('mysql');

exports.updateSession = async function (data, callback) {
    let session = data.sessionid;
    let cmd = "select UserID from Users where SessionID = " + mysql.escape(session);
    db.select(cmd, (err, result) => {
        if (err) { callback(err); }
        else if (result == "") {
            let result = {};
            result.success = false;
            callback(result);
        }
        else {
            let cmdUpdate = "update Users set SessionID = 'null' where UserID = " + mysql.escape(result[0].UserID);
            db.update(cmdUpdate, (err, result) => { });
            result[0].success = true;
            callback(result[0])
        }
    })
}

exports.checksession = async function (session, callback) {
    let cmd = "select UserID from Users where SessionID = " + mysql.escape(session.sessionid);
    let filter = {};
    db.select(cmd, (err, result) => {
        if (err) { callback(err) }
        else if (result == "") {
            let result = {};
            result.success = false;
            callback(result);
        }
        else {
            result[0].success = true;
            callback(result);
        }
    })
}