const path = require("path");
const Home = require("../models/Home");
const User = require("../models/User");
const rootDir = require("../util/path-util");

exports.getIndex = (req, res, next) => {
  console.log(req.session);
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getFavourites = async (req, res, next) => {
  const userId = req.session.user._id;
  try {
    const user = await User.findById(userId).populate("favouriteHomes");
    res.render("store/favourites", {
      homes: user.favouriteHomes,
      pageTitle: "Favourites",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

exports.postAddFavourites = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;

  try {
    const user = await User.findOne({ _id: userId });
    if (!user.favouriteHomes.includes(homeId)) {
      user.favouriteHomes.push(homeId);
      await user.save();
    }
  } catch (err) {
    console.log(err);
  } finally {
    res.redirect("/favourites");
  }
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
    res.render("store/home-detail", {
      home: home,
      pageTitle: "Home Detail",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getRules = (req, res, next) => {
  // const homeId = req.params.homeId;
  const rulesFileName = 'Airbnb_House_Rules.pdf';
  const filePath = path.join(rootDir, "rules", rulesFileName);
  // res.sendFile(filePath);
  res.download(filePath, "Rules.pdf")
}