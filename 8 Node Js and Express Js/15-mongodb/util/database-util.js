const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://aman00001:aman9977@aman00001.gi34bjk.mongodb.net/?retryWrites=true&w=majority&appName=aman00001";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log(client);
      _db = client.db("airbnb");
      callback();
    })
    .catch((error) => {
      console.log("Error while connecting ", error);
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
