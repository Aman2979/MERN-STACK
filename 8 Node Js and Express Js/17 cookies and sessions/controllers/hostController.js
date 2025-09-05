const Home = require("./../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { editing: false, pageTitle: "Host Your Home", isLoggedIn: req.isLoggedIn });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  if (!editing) {
    console.log("Editing Flag is not set properly");
    return res.redirect("/host/host-homes");
  }

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      editing: editing,
      pageTitle: "Edit Your Home", 
      isLoggedIn: req.isLoggedIn
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  console.log(
    "First body",
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );
  const newHouse = new Home({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  });
  newHouse.save().then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;

  Home.findById(id)
    .then((exixtingHome) => {
      if (!exixtingHome) {
        return res.redirect("/host/host-homes");
      }
      exixtingHome.houseName = houseName;
      exixtingHome.price = price;
      exixtingHome.location = location;
      exixtingHome.rating = rating;
      exixtingHome.photoUrl = photoUrl;
      exixtingHome.description = description;
      return exixtingHome.save();
    })
    .finally(() => {
      return res.redirect("/host/host-homes");
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete ", homeId);
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-homes", {
      homes: registeredHomes,
      pageTitle: "Host Home", 
      isLoggedIn: req.isLoggedIn
    });
  });
};
