const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 4
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decod = jwt.verify(token, '123abc');
console.log(decod);
// var msg = 'I am user number 3';
// var hash = SHA256(msg).toString();
//
// console.log('Message: '+ msg);
// console.log('Hash:'+hash);
