var _ = require('lodash');
var db = require('../configs/query');
// const image2base64 = require('image-to-base64');
var fs = require('fs');
var mysql = require('mysql');

exports.pic = async function (data, callback) {
    // console.log(data)
    let cmd = "select * from Products;";
    db.select(cmd, (err, result) => {
        // console.log(result)
        var reader = new fs.readFileSync(result[0].ImageAddress);
        var id = result[0].ProductID;
        console.log(id)
        if (err) { callback(err); }
        else {
            let result = {};
            result.dataURL = "data:image/jpg;base64," + reader.toString('base64');
            result.id = id;
            let cmdUpdate = "update Products set ImageAddress = " + mysql.escape(result.dataURL) + " WHERE ProductID = " + result.id;
            db.update(cmdUpdate, (err, result) => {
                callback(result);
            });

        }
    })
}

