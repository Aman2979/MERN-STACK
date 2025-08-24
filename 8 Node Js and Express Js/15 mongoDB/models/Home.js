const Favourites = require("./Favourites");
const airbnbDb = require("../util/database-util");
const { get } = require("../routers/storeRouter");

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
    const db = getDb();
    return db.collection("homes").insertOne(this).then(result => {
      console.log(result);
    });
  }

  static fetchAll() {
  }

  static findById(homeId) {
  }

  static deletById(homeId, callback) {

  }
};
