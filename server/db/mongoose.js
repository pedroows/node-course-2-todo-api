var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin@ds028310.mlab.com:28310/node-todo-api");
//mongoose.connect('mongodb://localhost:27017/TodoApp');
module.exports = {mongoose};
