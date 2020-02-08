/**
 * server.js
 * 
 * @date 2020-02-08
 * @author Bammer
 */

// import express module and middleware
const http = require('http'),
      express = require('express'),
      bodyParser = require('body-parser'),
      expressErrorHandler = require('express-error-handler');

// import mongoose module
const mongoose = require('mongoose');



// create express object
let app = express();

// set the port as attr. of app obj.
app.set('port', process.env.PORT || 3000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());



/* Connect to DB */

const URL = 'mongodb://127.0.0.1:27017/todo';

// variable for DB & model
let db, Todos;

function connectDB() {
    mongoose.Promise = global.Promise;

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    db = mongoose.connection;

    db.on('open', () => {
        console.log(`CONNECTED: '${URL}' for MongoDB`);

        // create todo Schema & model obj.
        Todos = require('./app/models/todo');
    });

    db.on('error', console.error.bind(console, 'mongoose connection error:)'));
    db.on('disconnected', () => {
        console.log('DISCONNECTED: try to connect after 5 seconds...');
        setInterval(connectDB, 5000);
    });

    process.on('SIGINT', () => {
        console.log('PROCESS KILLED:)');
        process.exit(0);
    });

    // add db attr. to app object
    app.set('db', db);
}



/* Register routing function */

// create a new router object
let router = express.Router();

/*
router.use(function(req, res, next) {
    console.log('Router is working...');
    next();
});
*/

// TODO: fix to 'sendFile' for deprecated
router.get('/', function(req, res) {
    res.sendfile('todos.html');
});

router.route('/todos')

    .post(function(req, res) {
        var todo = new Todos();
        todo.text = req.body.text;
        todo.details = req.body.details;
        todo.done = true;
        todo.save(function(err) {
            if (err) res.send(err);
            res.json(todo);
        });
    })
    .get(function(req, res) {
        Todos.find(function(err, _todos) {
            if (err) res.send(err);
            var todos = {
                'todos': _todos,
            }
            res.json(todos);
        });
    });

router.route('/todos/:_id')

    .post(function(req, res) {
        Todos.deleteOne({
            _id: req.params._id,
        }, function(err, _todo) {
            if (err) res.send(err);
            var todo = {
                _id: req.params._id,
            }
            console.log("--- todo");
            console.log(todo);
            res.json(todo);
        });
    });

// register a router obj. to app obj.
app.use('/api', router);



/* catch 404*/

var errorHandler = expressErrorHandler({
    static: {
        '404': './404.html',
    }
});

// after all routes, pass a 404 into next(err)
app.use( expressErrorHandler.httpError(404) );
// handle all unhandled errors
app.use( errorHandler );



/* Run express server */
http.createServer(app).listen(app.get('port'), function() {
    console.log(`EXPRESS: server is running on ${app.get('port')}`);

    // call connectDB
    connectDB();
});
