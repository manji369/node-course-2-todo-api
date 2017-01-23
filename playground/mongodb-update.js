// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58856a3f2213a96b72e32298')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('588560943cff0216285c9f42')
  }, {
    $set: {
      name: 'Manjit Chakravarthy'
    }, $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});
