

var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todos');
var { User } = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:id', (req, res) => {

    var id = req.params.id;

    if (!ObjectID.isValid(id))
        return res.status(404).send({ 'error': 'inavlid ObjectId' });

    Todo.findById(id).then((doc) => {
        if (!doc)
        {
            res.status(400).send({ 'error': 'invalid' });
        }
        
            res.send({doc});
    }, (err) => {

        res.status(400).send(err);
    }).catch((e) => {
        res.status(400).send(err);
    })

});

app.get('/todos', (req, res) => {

    Todo.find().then((doc) => {
        res.send({ doc });
    }, (err) => {
        res.status(400).send(e);
    });
});




//get from todos
app.listen(3000, () => {
    console.log('Started on port 3000');
});



module.exports = {
    app
}