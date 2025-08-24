const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://techAman0001:Aman%402979@firstcluster.40bxuki.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster";

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(url)
    .then((client) => {
      _db = client.db("airbnb");
      callBack();
    })
    .catch((error) => {
      console.log("Error came while connecting to mongoDB", error);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("Could not connect to Db");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
