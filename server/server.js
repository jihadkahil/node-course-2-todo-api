

var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todos');
var { User } = require('./models/user');
var _ = require('lodash');


var app = express();
const port = process.env.PORT || 3000;
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
        if (!doc) {
            res.status(400).send({ 'error': 'invalid' });
        }

        res.send({ doc });
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


app.patch('/todos/:id', (req, res) => {
    
    var id = req.params.id;
    var body = _.pick(req.body, ['completed', 'text']);

    console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(400).send({'error':'object id not valid'});
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((doc)=>{

        if(!doc)
        {
            console.log('error doc');
            return res.status(400).send({'error':'object not found'});
        }else
        {
            res.send({doc});
        }

    },(err)=>{

        res.status(404).send({'error':err});
    }).catch((e)=>{
        res.status(404).send({'error':e});
    });
});

//get from todos
app.listen(port, () => {
    console.log(`start at port ${port}`);
});



module.exports = {
    app
}