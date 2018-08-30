const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Persons'
});

//Read data example 1

// con.query('select * from users',
//     function(err, rows) {
//         if(err) throw err;

//         console.log(rows);
//         console.log(rows[2].username);
//     });

//Read data example 2

// con.query('select * from users where username = ?', ['moritz'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log(rows);
//     });


//Update example 

// con.query('update users set username = ? where username = ?', ['rolf', 'lars'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log(rows);
//     });


//Insert example 

// con.query('insert into users (username) values (?)', ['fritz-gunther'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log('id of last insert: ' + rows.insertId);
//     });

//Delete example

con.query('delete from users where username = ?', ['moritz'],
    function(err, rows) {
        if(err) throw err;

        console.log(rows);
    });