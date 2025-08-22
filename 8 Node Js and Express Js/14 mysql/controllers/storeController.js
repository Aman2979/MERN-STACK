const Favourites = require("../models/Favourites");
const Home = require("./../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Home" });
  });  
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Home" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourites.fetchAll((favouritesIds) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favouritesIds.includes(home.id)
      );
      res.render("store/favourites", {
        homes: favouriteHomes,
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourites.addTofavourites(homeId, (error) => {
    if (error) {
      console.log("Error while adding to favourites", error);
    }
    res.redirect("/favourites");
  });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.deletById(homeId, (error) => {
    if (error) {
      console.log("Error while remove from favourites", error);
    }
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home to found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  });
};
