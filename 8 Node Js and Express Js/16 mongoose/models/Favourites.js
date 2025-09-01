module.exports = class Favourites {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb();
    return db
      .collection("favourites")
      .findOne({ homeId: this.homeId })
      .then((existingFav) => {
        if (!existingFav) {
          return db.collection("favourites").insertOne(this);
        }

        return Promise.resolve();
      });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deletById(homeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId });
  }
};
