const cors = require('cors');
const bodyParser = require('body-parser');


// Import Route Controllers
const Contactform = require('./Controllers/form');




// Setup Route Bindings
exports = module.exports = function (app) {

    // middlewares
    // Configure app for bodyParser()
    // lets us grab data from the body of POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get("/", (req, res) => {
        res.end("ok")
    });
    app.post('/api/contactform', Contactform.create);
    app.post('/api/subscribe', Contactform.Subscribe);
};