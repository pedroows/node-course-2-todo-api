//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable do connect to database server');
  }
  console.log('Connected to database server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Olivia'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5952aa676aaf43a20479c899')}).then((result)=>{
    console.log(result);
  });


  //db.close();
});
