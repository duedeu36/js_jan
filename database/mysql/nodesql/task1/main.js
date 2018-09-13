const mysql = require('mysql');
const fs = require('fs');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productserver'
});

con.query('select * from product_types', function (err, rows) {
    if (err) throw err;
    console.log(rows);
});

fs.readFile('products.json', function (err, data) {
    if (!err) {
        console.log(JSON.parse(data));
        var allProducts = JSON.parse(data);
        //go through a loop and each loop enters the data into the mysql table 'products'
        allProducts.forEach(function (object, index) {

            con.query('insert into products (product_title,product_year,product_imdbID,product_type_id,product_poster) values (?,?,?,?,?)', [object.Title, object.Year, object.imdbID, 1, object.Poster],
                function (err, rows) {
                    if (err) throw err;

                    console.log(rows);
                });
        });
    }
});