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

    //create Collections and insert data
db.collection('user').insertOne({
   
    name:'jihad',
    age:25,
    location:'koura'
},(err,result)=>{
    if(err)
    console.log(err);
    else
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});

    // db.collection('Todos').insertOne(
    // {

    //     text:'Hi',
    //     completed: true
    // },(err,result)=>{

    //     if(err)
    //     return console.log('unable to inseret todo',err);
    //     else
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // }
    // );
client.close();

});