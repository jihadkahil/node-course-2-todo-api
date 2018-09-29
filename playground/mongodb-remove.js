var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todos');
var { User } = require('./../server/models/user')
var { ObjectId } = require('mongodb');



// Todo.remove().then((doc)=>{
// console.log(doc);
// console.log(err);
// });

Todo.findByIdAndRemove('5bac9581bf8caa07d480901b').then((doc) => {

    console.log(doc);
}, (err) => {
    console.log(err);
});