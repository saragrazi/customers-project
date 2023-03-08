const con = require("../sqlConnect").con;

exports.getContacts = function(req, res) {
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }
    con.query("SELECT * FROM `contacts` WHERE `isDeleted` = ?", [isDeleted], (err, result) => {
        res.send(result);
    });
}


exports.getContact = function(req, res) {
    con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}

exports.addContact = function(req, res) {

    con.query("INSERT INTO `contacts`( `firstName`, `lastName`, `birthday`, `phone`, `email`, `city`, `street`) VALUES (?,?,?,?,?,?,?)", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.phone, req.body.email, req.body.city, req.body.street], (err, result) => {

        con.query("SELECT * FROM `contacts` WHERE `id` = ?", [result.insertId], (err, result) => {

            res.send(result[0]);
        });
    });
}

exports.updateContact = function(req, res) {
    con.query("UPDATE `contacts` SET `firstName` = ?, `lastName` = ?, `birthday` = ?, `phone` = ?, `email` = ?, `city` = ?, `street` = ? WHERE `id` = ?", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.phone, req.body.email, req.body.city, req.body.street, req.params.id], (err, result) => {

        res.send();
    });
}

exports.removeContact = function(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {

        res.send();
    });

}