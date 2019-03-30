var _ = require('lodash');
var db = require('../configs/query');
var mysql = require('mysql');
var sha256 = require('js-sha256');

exports.insertRegister = async function (data, callback) {
    let firstname = data.RegisterFirstname;
    let lastName = data.RegisterLastname;
    let email = data.RegisterEmail;
    let username = data.RegisterUsername;
    let password = sha256(data.RegisterPassword);
    let birthday = data.RegisterBirthday;
    let gender = data.RegisterGender;
    let typeUser = data.RegisterTypeUser;
    let cmdinsert = "insert into Users (Firstname,LastName,Username,Password,Email,Gender,Birthday,LastLogin,SessionID,TypeUser) values (" +
        mysql.escape(firstname) + "," + mysql.escape(lastName) + "," + mysql.escape(username) + "," +
        mysql.escape(password) + "," + mysql.escape(email) + "," + mysql.escape(gender) + "," +
        mysql.escape(birthday) + ",'-',1,"+mysql.escape(typeUser)+")";
    db.insertion(cmdinsert, (err, result) => {
        if (err) { callback(err); }
        else { callback(result); }
    });
}