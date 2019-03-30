var _ = require('lodash');
var db = require('../configs/query');
var mysql = require('mysql');
var sha256 = require('js-sha256');

exports.login = async function (data, callback) {
    let session = data.sessionid;
    let username = data.username;
    let password = data.password;
    let date = new Date();
    let typeUser = "";
    let encyptPass = sha256(password);
    let cmd = "select * from Users where Username = " +
        mysql.escape(username) + " and Password = " + mysql.escape(encyptPass);
    db.select(cmd, (err, result) => {
        if (err) { callback(err); }
        else if (result == "") {
            let result = {};
            result.success = false;
            callback(result);
        }
        else {
            let cmdUpdate = "update Users set LastLogin = " + mysql.escape(date) +
                " ,SessionID = " + mysql.escape(session) +
                " WHERE UserID = " + mysql.escape(result[0].UserID);
            typeUser = result[0].TypeUser
            db.update(cmdUpdate, (err, result) => { });
            result[0].success = true;
            result[0].typeuser = typeUser;
            callback(result[0])
        }
    })
}

exports.checkType = async function (data, callback) {
    let session = data.sessionid;
    let username = data.username;
    let password = data.password;
    let encyptPass = sha256(password);
    let cmd = "select TypeUser from Users where Username = " +
        mysql.escape(username) + " and Password = " + mysql.escape(encyptPass);
    db.select(cmd, (err, result) => {
        if (err) { callback(err); }
        else if (result == "") {
            let result = {};
            result.success = false;
            callback(result);
        }
        else {
            console.log(result)
            callback(result);
        }
    })
}
