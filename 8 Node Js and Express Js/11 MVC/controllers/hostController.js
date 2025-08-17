const Home = require("./../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Host Your Home" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHouse = new Home(houseName, price, location, rating, photoUrl);
  newHouse.save((err) => {
    if (err) {
      res.redirect("/");
    } else {
      res.render("home-added", { pageTitle: "Home Hosted" });
    }
  });
};
