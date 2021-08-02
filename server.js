require('dotenv').config();

const express = require('express');
const port = 3000;
const app = express();

const session = require('express-session');

const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');

const Datastore = require('nedb');
const db = {};
db.products = new Datastore('db/products.db');
db.products.loadDatabase();
db.users = new Datastore('db/users.db');
db.users.loadDatabase();


app.set('view-engine', 'ejs');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/', (req, res) => {
    res.render('pages/index.ejs', {
        name: 'Marvin'
    });
});

app.get('/login', (req, res) => {
    res.render('pages/login.ejs');
});

app.get('/register', (req, res) => {
    res.render('pages/register.ejs');
});

app.post('/login', (req, res) => {

    //get user
    db.users.find({ email: req.body.email }, async function (err, docs) {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: 'db error'
            });
        }
        else if(docs.length === 0){
            console.log('user not found');
            return res.json({
                success: false,
                message: 'user not found'
            });
        }
        else {
            const user = docs[0];

            //compare passwords
            await bcrypt.compare(req.body.password, user.password, function (err, same) {
                if (err) {
                    // handle error
                    console.log(err);
                }
                if (same) {
                    // Send JWT
                    console.log(`user ${user.name} logged in`);
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                    res.json({
                        accessToken: accessToken
                    });
                } else {
                    return res.json({
                        success: false,
                        message: 'passwords do not match'
                    });
                }
            });
        }
    });

});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = req.body;
        data.password = hashedPassword;
        //TODO: checken ob user existiert -> dann nich insert sondern fehlermeldung (user existiert bereits)
        db.users.insert(data);
        console.log(data);
        res.redirect('/login');
    } catch (err) {
        res.redirect('/register');
    }
});

app.get('/logedInOnly', authenticateToken, (req, res) => {
    res.json({
        message: 'You are logged in! :)'
    })
});

app.post('/addProduct', authenticateToken, (req, res) => {
    console.log('Neuer Post');
    const data = req.body;
    console.log(data);
    data.timestamp = Date.now();
    db.products.insert(data);

    res.json({
        status: 'Success'
    });
});

app.get('/addProduct', authenticateToken, (req, res) => {
    res.json({
        name: req.user.name
    })
});



//authentication middleware

function authenticateToken(req, res, next) {
    console.log(req.cookies['token']);
    const authHeader = req.cookies['token'];
    const token = authHeader && authHeader.split(' ')[1]
    console.log("verifying");

    //no token
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        //wrong token
        if (err) return res.sendStatus(403);
        //correct token
        req.user = user;
        console.log(`User ${user.name} verified`);
        next();
    });
}


app.listen(port, () => console.log('listening at port ' + port));