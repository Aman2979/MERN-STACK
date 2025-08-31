const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path-util");

const favouritesFilePath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourites {
  static fetchAll(callback) {
    fs.readFile(favouritesFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data))
      }
    });
  }

  static addTofavourites(homeId, callback) {
    Favourites.fetchAll((favouritesIds) => {
      favouritesIds.push(homeId);
      fs.writeFile(favouritesFilePath, JSON.stringify(favouritesIds), callback);
    });
  }
  static deletById(removeHomeId, callback) {
      Favourites.fetchAll((homeIds) => {
        const newHomeIds = homeIds.filter(homeId => removeHomeId !== homeId)
        fs.writeFile(favouritesFilePath, JSON.stringify(newHomeIds), callback);
      });
    }
};
