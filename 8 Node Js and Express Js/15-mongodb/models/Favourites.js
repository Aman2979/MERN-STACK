const { ObjectId } = require("mongodb");
const { getDb } = require("../util/database-util");

module.exports = class Favourites {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb;
    return db.collection("favourites").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deletById(homeId) {
    const db = getDb();
    return db
      .collection("favourites")
      .deleteOne({ homeId: new ObjectId(String(homeId)) });
  }
};
