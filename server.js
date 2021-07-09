const { request, response } = require('express');
const express = require('express');
const Datastore = require('nedb');
const jwt = require('jsonwebtoken');

const db = {};
db.products = new Datastore('db/products.db');
db.products.loadDatabase();

const port = 3000;
const app = express();

app.listen(port, () => console.log('listening at ' + port));
app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true }))

app.post('/addProduct', (request, response) => {
    console.log('Neuer Post');
    const data = request.body;
    console.log(data);
    data.timestamp = Date.now();
    db.products.insert(data);

    response.json({
        status: 'success'
    });
});

app.post('/login', (request, response) => {
    // Authenticate User

    const username = request.body.username;
    const user = {
        name: username
    }
    jwt.sign()

    response.json({
        status: 'success'
    })
});