

var { mongoose } = require('./../server/db/mongoose');
// var { Todo } = require('./../server/models/todos');
var { User } = require('./../server/models/user')


var id = "5b9fca12e51a4a6834d655191";
var user_id = "5ba7562ece43c2443c18ceff";
// Todo.find({
//     _id: id
// }).then((doc) => {
//     if(doc.length==0)
//     {
//         return console.log('id not found');
//     }
//     console.log(doc);
// }, (err) => {
//     console.log(err);
// });

// Todo.findOne({
//     _id: id
// }).then((doc) => {
//     if(!doc)
//     {
//         return console.log('id not found');
//     }
//     console.log(doc);
// }, (err) => {
//     console.log(err);
// });
// if (!ObjectID.isValid(user_id)) {
//     console.log('id not valid')
// }

// var user = new User({
//     name:'jihadkahil',
//     passwrod:'1234567',
//     email:"Aloha"
// });
// user.save().then((doc)=>{
//     console.log(doc);
// },(err)=>{
//     console.log(err);
// });

User.findById(user_id).then((user) => {
    console.log(user)
}, (err) => {
    console.log(err);
}).catch((err) => {
    console.log(err);
});
// Todo.findById(id).then((doc) => {
//     if(!doc)
//     {
//         return console.log('id not found');
//     }
//     console.log(doc);
// }, (err) => {
//     console.log(err);
// }).catch((e)=>{
//     console.log(e);
// });