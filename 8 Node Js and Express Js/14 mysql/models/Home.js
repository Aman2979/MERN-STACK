const Favourites = require("./Favourites");
const airbnbDb = require("../util/database-util");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save(callback) {
    
  }

  static fetchAll() {
    return airbnbDb.execute("SELECT * FROM homes")
  }

  static findById(homeId, callback) {}

  static deletById(homeId, callback) {}
};
