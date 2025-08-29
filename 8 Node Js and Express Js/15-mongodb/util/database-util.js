const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://tech2:aman2979@tech2.mdqpuu1.mongodb.net/?retryWrites=true&w=majority&appName=tech2";


let _db;  

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log(client);
      _db = client.db("airbnb")
      callback()
    })
    .catch((error) => {
      console.log("Error while connecting ", error);
    });
};

const getDb = () =>{
  if (!_db) {
    throw new Error('could not connect to Db')
  }
  return _db
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb
