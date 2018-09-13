const express = require('express');
const fs = require('fs');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productserver'
});

app.use(bodyParser.json());

let productFile = __dirname + '/products.json';

if(!fs.existsSync(productFile)) {
    fs.writeFileSync(productFile, '[]', 'utf-8');
}

app.get('/products', function(req, res) {
    let sql = 'select * from products';

    if(req.query.q) {
        sql += 'where lower(product_title) like lower(?) or lower(product_year) like lower(?)';
    }

    con.query(sql, ['%'+ req.query.q +'%', '%'+ req.query.q +'%'],function(err, data) {
        if(err) return res.send({error: err});

        else return res.send(data);
    });

});
//Task: 
app.post('/products', function(req, res) {
    if(!req.body.product_title || !req.body.product_imdbID || !req.body.product_year || !req.body.product_type_id || !req.body.product_poster) {
        return res.send({ error: 'invalid request' });
    }

    let sql = `insert into products (product_title, product_imdbID, product_year, product_type_id, product_poster) values (?, ?, ?, ?, ?)`;

    let values = [
        req.body.product_title,
        req.body.product_imdbID,
        req.body.product_year,
        req.body.product_type_id,
        req.body.product_poster
    ];

        con.query(sql, values, function(err, data) {
        if(err) return res.send({ error: err });

        return res.send({ error: 0, insertId: data.insertId });
    });
    
    
    // con.query(sql, [req.body.product_title], [req.body.product_imdbID],  [req.body.product_year],  [req.body.product_type_id], [req.body.product_poster], function(err, data) {
        //     if(err) return res.send({error: err});
        
        // return res.send(data);
    });



// Query parameter: [req.query.q]
//                  halloworld.com/users?abc=123&xyz=456
//

// Parameter:       [req.params.id]  
//                  halloworld.com/id=3
//                  halloworld.com/userid=55

app.delete('/products/:id', function(req, res) {
    
    let sql = 'delete from products where id = ?';

    // if(req.query.q) {
    //     sql += 'where product_title like lower(?)';
    // }

    con.query(sql, [req.params.id] , function(err, data) {
        if(err) return res.send({error: err});

        else return res.send(data);
    });

});

app.listen( 3000 );