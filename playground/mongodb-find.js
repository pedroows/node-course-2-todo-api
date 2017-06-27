//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable do connect to database server');
  }
  console.log('Connected to database server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('595288796aaf43a20479c55d')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch data')
  // });

    // db.collection('Todos').find().count().then((count)=>{
    //   console.log('Todos count ', count);
    // }, (err)=>{
    //   console.log('Unable to fetch data')
    // });

  db.collection('Users').find({name: 'Olivia'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch data')
  });

  //db.close();
});
