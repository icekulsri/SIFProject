var _ = require('lodash');
var db = require('../configs/query');
var mysql = require('mysql');
var sha256 = require('js-sha256');
var fs = require('fs');

exports.stock = async function (data, callback) {
    let cmd = "select * from Products";
    db.select(cmd, (err, result) => {
        console.log(result)
        var reader = new fs.readFileSync(result[0].ImageAddress);
        var id = result[0].ProductID;
        var name = result[0].ProductName;
        var type = result[0].ProductType;
        var size = result[0].ProductSize;
        var price = result[0].ProductPrice;
        var cartoon = result[0].ProductCartoon;
        var color = result[0].ProductColor;
        var date = result[0].DateIn;
        var stock = result[0].ProductStock;

        if (err) { callback(err); }
        else {
            let result = {};
            result.success = true;
            // for(var j = 0;j<a;j++){
            //     // result[j].dataURL = "data:image/jpg;base64,"+reader[j].toString('base64');
            //     result[j].name = name[j];
            //     result[j].type = type[j];
            //     result[j].id = id[j];
            //     result[j].size = size[j];
            //     result[j].price = price[j];
            //     result[j].cartoon = cartoon[j];
            //     result[j].color = color[j];
            //     result[j].date = date[j];
            //     result[j].stock = stock[j];
                
            // }

            // console.log(result)
            
            result.dataURL = "data:image/jpg;base64,"+reader.toString('base64');
            result.name = name;
            result.type = type;
            result.id = id;
            result.size = size;
            result.price = price;
            result.cartoon = cartoon;
            result.color = color;
            result.date = date;
            result.stock = stock;
            
            callback(result);
        }
    })
}