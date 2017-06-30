//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable do connect to database server');
  }
  console.log('Connected to database server');

  //findOneAndUpdate
  //ObjectId("5952a8cd6aaf43a20479c800")
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5952a8cd6aaf43a20479c800')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('595189ba95bb3c1b0c76adfb')
  }, {
    $set:{
      name: 'Pedro'
    },$inc:{
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  //db.close();
});
