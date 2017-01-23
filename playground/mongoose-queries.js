const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js')
const {User} = require('./../server/models/user.js')

// var id  = '5886299b4f9f1c091936f5f11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id:', todo);
// }).catch(e => console.log(e));

var id = '58859cda3ad88e663fdcc397'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User id not found');
  }

  console.log('User by id:', user);
}, (e) => {
  console.log(e);
}).catch(e => console.log(e));
