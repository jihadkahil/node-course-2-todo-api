// const MongoClient = require('mongodb').MongoClient;

var {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if(err)
{
    console.log('unable to connect to the server');
}

else

    console.log('connected to Mongo DB server');

    



const db = client.db('TodoApp');

//Delete all
// db.collection('Todos').deleteMany({text:'aloha'})
// .then((result)=>{
// console.log(result);
// },(error)=>{
// console.log(error);
// });

// db.collection('Todos').deleteOne({text:'latizi'}).then((result)=>{
// console.log(result);
// },(error)=>{
// console.log(error);
// });

db.collection('Todos').findOneAndDelete({_id:new ObjectID('5b88fb9f749bc99496372f9d')}).then((result)=>{
console.log(result);
},(error)=>{
console.log(error);
});
client.close();
});