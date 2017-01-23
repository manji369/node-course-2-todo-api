// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Users').deleteMany({name: 'Manjit Chakravarthy'});

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58856ca12213a96b72e323dd')}).then( (results) => {
    console.log(JSON.stringify(results, undefined, 2));
  })

  // db.close();
});
