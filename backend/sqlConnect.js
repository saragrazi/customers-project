const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project',
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');
});

exports.con = con;