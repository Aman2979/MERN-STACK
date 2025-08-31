const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-util");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    const db = getDb()
    return db.collection("homes").insertOne(this)
  }

  static fetchAll() {
    const db = getDb()
    return db.collection('homes').find().toArray()
  }

  static findById(homeId) {

  }

  static deletById(homeId, callback) {

  }
};
