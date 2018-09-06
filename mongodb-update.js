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

// db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b9146980d61987efacfc21d')},{
//     $set:{
//         completed:false
//     }
// },

// {returnOriginal:false}

// )
// .then((result)=>{
// console.log(result);
// },(error)=>{
// console.log(error);
// });



db.collection('user').findOneAndUpdate({_id:new ObjectID('5b8655305ffab80c7883d079')}
,{$set:{
    name:'aloha'
},
$inc:{
age:1
}
},

{returnOriginal:false}
).then((result)=>{
console.log(result);
 


},(error)=>{

})
client.close();
});