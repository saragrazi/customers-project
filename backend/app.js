const express = require('express');
const cors = require('cors');
require('./sqlConnect');
const signup = require('./services/signup');
const login = require('./services/login');
const customers = require('./services/customers');
const contacts = require('./services/contacts');

const session = require('express-session');

const app = express();


app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

app.listen(() => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/login', login.getLoginStatus);
app.get('/logout', login.logout);
app.post('/signup', signup.signup);
app.post('/login', login.login);

app.get('/customers', authGurd, customers.getCustomers);
app.get('/customer/:id', authGurd, customers.getCustomer);
app.post('/customers', authGurd, customers.addCustomer);
app.put('/customers/:id', authGurd, customers.updateCustomer);
app.delete('/customers/:id', authGurd, customers.removeCustomer);
app.get('/customers/customerDetails/:id', authGurd, customers.getCustomer);

app.get('/contacts', authGurd, contacts.getContacts);
app.get('/contact/:id', authGurd, contacts.getContact);
app.post('/contacts', authGurd, contacts.addContact);
app.put('/contacts/:id', authGurd, contacts.updateContact);
app.delete('/contacts/:id', authGurd, contacts.removeContact);
app.get('/contacts/contactDetails/:id', authGurd, contacts.getContact);

app.post('/googleLogin', login.googleLogin);