const express = require('express');

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';

const app = express();
app.use(express.json()); // experimental

app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.get('/', function(req, res) {
    return res.send({ 'crudapi': '1.0' });
});


app.get('/products', function(req, res) {
    console.log('hallo damir');
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        const dbo = db.db('movieDB');
        
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

app.post('/products', function(req, res) {
    if(!req.body.Title || !req.body.Year || !req.body.imdbID || !req.body.Type || !req.body.Poster) {
        return res.send({ error: 'Title, Year, imdbID, Type or Poster is required' });
    }

    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('movieDB');
        var newProduct = {
            title: req.body.Title,
            year: req.body.Year,
            imdbid: req.body.imdbID,
            type: req.body.Type,
            poster: req.body.Poster
        };

        dbo.collection('products').insertOne(newProduct, function(err, dbres) {
            if(err) return res.send({ error: err });

            db.close();
            return res.send({ error: 0, insertId: dbres.insertedId });
        });
    });
});

app.delete('/products/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('movieDB');

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

app.put('/products/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('movieDB');

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


app.listen(3000);