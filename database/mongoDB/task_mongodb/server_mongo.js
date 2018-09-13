const express = require('express');
const bodyParser = require('body-parser');

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';

const app = express();
app.use(express.json()); // experimental

app.get('/', function(req, res) {
    return res.send({ 'crudapi': '1.0' });
});

app.get('/products', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        const dbo = db.db('productserver');
        
        if(!req.query.id) {        
            dbo.collection('products').find({}).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });
                db.close();
                return res.send( dbres );
            });
        }
        else {
            let mongoId = null;
            try {
                mongoId = new mongo.ObjectId(req.query.id);
            }
            catch(err) {
                if(err) return res.send({ error: err });
            }

            dbo.collection('products').findOne({'_id': mongoId}, function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        }
    });
});

app.post('/product', function(req, res) {
    if(!req.body.type || !req.body.price || !req.body.title || !req.body.description || !req.body.imageurl || !req.body.id) {
        return res.send({ error: 'type, price, title, description, imageurl or id required' });
    }

    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('productserver');
        var newProduct = {
            type: req.body.type,
            price: req.body.price,
            title: req.body.title,
            description: req.body.description,
            imageurl: req.body.imageurl,
            id: req.body.id
        };

        dbo.collection('products').insertOne(newProduct, function(err, dbres) {
            if(err) return res.send({ error: err });

            db.close();
            return res.send({ error: 0, insertId: dbres.insertedId });
        });
    });
});

app.delete('/product/:id', function(req, res) {
        MongoClient.connect(url, function(err, db) {
            if(err) return res.send({ error: err });
    
            var dbo = db.db('productserver');

            let mongoId = null;
            try {
                mongoId = new mongo.ObjectId(req.params.id);
            }
            catch(err) {
                return res.send({ error: err });
            }

            dbo.collection('products').deleteOne({'_id': mongoId}, function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        });

});

app.put('/product/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('productserver');

        let mongoId = null;
        try {
            mongoId = new mongo.ObjectId(req.params.id);
        }
        catch(err) {
            return res.send({ error: err });
        }    

        let newValues = { $set: req.body };
        
        dbo.collection('products').updateOne({_id: mongoId}, newValues, function(err, dbres) {
            if(err) return res.send({ error: err });
            
            db.close();
            return res.send({ error: 0, result: dbres });
        });
    });
});

app.listen( 3000 );