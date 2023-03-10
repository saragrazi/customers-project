const con = require("../sqlConnect").con;

exports.getCustomers = function(req, res) {
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }

    con.query("SELECT * FROM `customers` WHERE `isDeleted` = ?", [isDeleted], (err, result) => {

        res.send(result);
    });
}


exports.getCustomer = function(req, res) {
    con.query("SELECT * FROM `customers` WHERE `id` = ?", [req.params.id], (err, result) => {

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}


exports.addCustomer = function(req, res) {
    con.query("INSERT INTO `customers`( `firstName`, `lastName`, `phone`, `email`, `country`, `city`, `street`, `remark`) VALUES (?,?,?,?,?,?,?,?)", [req.body.firstName, req.body.lastName, req.body.phone, req.body.email, req.body.country, req.body.city, req.body.street, req.body.remark], (err, result) => {

        con.query("SELECT * FROM `customers` WHERE `id` = ?", [result.insertId], (err, result) => {


            res.send(result[0]);
        });
    });
}

exports.updateCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `firstName` = ?, `lastName` = ?, `phone` = ?, `email` = ?, `country` = ?, `city` = ?, `street` = ?,  `remark` = ? WHERE `id` = ?", [req.body.firstName, req.body.lastName, req.body.phone, req.body.email, req.body.country, req.body.city, req.body.street, req.body.remark, req.params.id], (err, result) => {

        res.send();
    });
}


exports.removeCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {

        res.send();
    });

}