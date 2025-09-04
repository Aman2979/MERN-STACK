const Favourites = require("../models/Favourites");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Home" });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Home" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourites.find().then((favouritesIds) => {
    Home.find()
      .then((registeredHomes) => {
        favouritesIds = favouritesIds.map((favId) => favId.homeId.toString());

        const favouriteHomes = registeredHomes.filter((home) =>
          favouritesIds.includes(home._id.toString())
        );
        res
          .render("store/favourites", {
            homes: favouriteHomes,
            pageTitle: "Favourites",
          })
      })
  });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourites({ homeId });
  fav
    .save()
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while adding to favourites", err);
      res.redirect("/favourites");
    });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.findOneAndDelete(homeId)
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while deleting fav home", err);
    });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home to found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  });
};
