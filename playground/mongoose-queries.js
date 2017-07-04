const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '595a89340b3fa31b9ca86271';
var userId = '5956ce62e4f02a0b38dc159b';
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e)=> console.log(e));
User.findById(userId).then((user)=>{
  if(!user){
    return console.log('User not found');
  }

  console.log('User', user);
}).catch((e)=>{
  console.log(e);
})
