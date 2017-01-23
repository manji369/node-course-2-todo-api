const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js')
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '58864456b44a23bc6bea97e7'}).then((todo) => {

});


Todo.findByIdAndRemove('58864456b44a23bc6bea97e7').then((todo) => {
 console.log(todo);
});
