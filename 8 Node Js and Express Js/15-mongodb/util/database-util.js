const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://techAman0001:aman2979@firstcluster.40bxuki.mongodb.net/?retryWrites=true&w=majority&tls=true";


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
