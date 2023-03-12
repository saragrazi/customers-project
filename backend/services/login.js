const con = require("../sqlConnect").con;

exports.getLoginStatus = function(req, res) {
    if (req.session.user) {
        res.send({
            status: 'success',
            user: req.session.user,
        });
    } else {
        res.send({
            status: 'error',
        });
    }
}
exports.googleLogin = function(req, res) {


    if (!req.body.name) {
        res.send({
            status: 'error',
            message: 'שדות אלו הם שדות חובה'
        });
        return;
    }

    con.query("SELECT * FROM `users` WHERE `email`=?", [req.body.email], (err, result) => {
        if (err) {
            res.send({
                status: 'error',
                message: 'unidentified error'
            });

            return;
        }

        if (!result.length) {
            const sqlQuery = "INSERT INTO `users`(`createdTime`, `fullName`, `email`, `userName`, `password`) VALUES (CURRENT_TIME, ?, ?, ?, '')";
            const paramArr = [req.body.name, req.body.email, ''];

            con.query(sqlQuery, paramArr, (err, result) => {
                if (err) {
                    throw err;
                }

                con.query("SELECT `id`, `createdTime`, `fullName`, `email`, `userName` FROM `users` WHERE `id` = ?", [result.insertId], (err, result) => {
                    if (err) {
                        throw err;
                    }

                    const user = result[0];
                    req.session.user = user;

                    res.send({
                        status: 'success',
                        user,
                    });
                });
            });
        } else {
            const user = result[0];
            req.session.user = user;

            res.send({
                status: 'success',
                user,
            });
        }
    });
}


exports.logout = function(req, res) {
    if (req.session.user && req.session.user.provider === 'google') {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            delete req.session.user;
            res.send();
        });
    } else {
        delete req.session.user;
        res.send();
    }
}

exports.login = function(req, res) {
    delete req.session.user;

    if (!req.session.attempts) {
        req.session.attempts = 0;
    }

    if (req.session.attempts >= 7) {
        res.send({
            status: 'error',
            message: "נסיונות חיבור מרובים",
        });

        return;
    }

    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    const paramArr = [req.body.userName.trim(), req.body.password.trim()];

    con.query(sqlQuery, paramArr, (err, result) => {

        if (err) {
            console.log(err);

            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שגיאה לא מוגדרת",
            });

            return;
        }

        if (!result.length) {
            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שם משתמש או סיסמה לא נכונים",
            });
        } else {

            delete req.session.attempts;

            const user = result[0];
            req.session.user = user;

            res.send({
                status: 'success',
                user,
            });
        }
    });
}