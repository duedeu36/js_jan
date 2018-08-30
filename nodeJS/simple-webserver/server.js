const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

//middlewere bodyparser
app.use( bodyParser.json() );

app.get('/', function(req, res) {
    //1. object -> JSON
    res.send({ simpleserverapi: '1.0' });
});

app.get('/public/:username', function(req, res) {

    res.send( 'You requested the user ' + req.params.username );
});

app.post('/user', function(req, res) {
    if(!req.body.username || !req.body.email || !req.body.password) {
        return res.send({ error: 'username, email or password is reguired!' 
        });
    }

    // 1. Read request
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    // 2. Read File
    fs.readFile(__dirname + '/users.json', function(err, data) {
        if(err) return res.send({ error: err });

        // 3. Parse JSON
        let users = JSON.parse(data);
        // at the beginning: [] (empty arr)
        // later: [{}, {}, {}] (array with obj)

        // 4. Push the user in the array
        users.push(newUser);

        fs.writeFile(__dirname + '/users.json', 
                    JSON.stringify(users), 
                    'utf-8', function(err) {
                        if(err) return res.send({ error: err});
                        
                        return res.send({ message: 'user has been saved.' });
                    });
    });

    // console.log( newUserStr );
});

app.get('/user', function(req, res) {

    return res.send({ users: [] });
});

app.listen(3000);

