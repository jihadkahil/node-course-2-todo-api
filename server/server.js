var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


//save new somethings

var Todo = mongoose.model('Todo', {

    text: {

        type: String
    }
    ,
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var addTodo = new Todo({
    text: 'cook dinner'
});

addTodo.save().then((doc) => {
    console.log('unable to save', doc);
}, (e) => {
    console.log('unable to save', e);
});

var otherTodo = new Todo({
    text: 'cook dinner',
    completed:true,
    completedAt:123
});

otherTodo.save().then((doc)=>{
    console.log('unable to save', doc);
},(er)=>{
    console.log('unable to save', e);
});