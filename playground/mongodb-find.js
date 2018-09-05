// const MongoClient = require('mongodb').MongoClient;

var {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if(err)
{
    console.log('unable to connect to the server');
}

else

    console.log('connected to Mongo DB server');

    



const db = client.db('TodoApp');

// find all
// db.collection('Todos').find().toArray().then((docs)=>{

//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log('unable to fetch todos',err);
// });
// client.close();

//to query edit in find by values
// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log('unable to fetch');
// });


// get value by object Id
// db.collection('Todos').find({_id:new ObjectID('5b88fb9f749bc99496372f9d')}).toArray().then((docs)=>{
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log('unable to fetch');
// });

db.collection('Todos').find().count().then((num)=>{
console.log(`the number of is ${num}` );
},(err)=>{
console.log("unable to get");
});
client.close();
});