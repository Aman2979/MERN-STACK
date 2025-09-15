const Home = require("../models/Home");
const { deleteFile } = require("../util/file");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    editing: false,
    pageTitle: "Host Your Home",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
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
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating,  description } =
    req.body;
  console.log("Request Body", req.body);
  console.log("House Photo", req.file);

  if (!req.file) {
    return res.status(400).send("Please upload a valid image file");
  }

  const photoUrl = "/"+ req.file.path; 
  const newHouse = new Home({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
    host: req.session.user._id,
  });
  newHouse.save().then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, description } =
    req.body;
    console.log("Request Body", req.body);
  console.log("House Photo", req.file);
  Home.findById(id)
    .then((exixtingHome) => {
      if (!exixtingHome) {
        return res.redirect("/host/host-homes");
      }
      exixtingHome.houseName = houseName;
      exixtingHome.price = price;
      exixtingHome.location = location;
      exixtingHome.rating = rating;
      if (req.file) {
        // Only delete the old file if it exists and is not empty
        if (exixtingHome.photoUrl && exixtingHome.photoUrl.length > 1) {
          deleteFile(exixtingHome.photoUrl.substring(1));
        }
        exixtingHome.photoUrl = "/" + req.file.path;
      }
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
  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        return res.redirect("/host/host-homes");
      }
      // Delete the associated photo file if it exists
      if (home.photoUrl && home.photoUrl.length > 1) {
        // Remove leading slash for file system path
        const filePath = home.photoUrl.startsWith("/") ? home.photoUrl.substring(1) : home.photoUrl;
        const { deleteFile } = require("../util/file");
        deleteFile(filePath);
      }
      return Home.findByIdAndDelete(homeId);
    })
    .then(() => {
      res.redirect("/host/host-homes");
    })
    .catch((err) => {
      console.error("Error deleting home:", err);
      res.redirect("/host/host-homes");
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find({ host: req.session.user._id }).then((registeredHomes) => {
    res.render("host/host-homes", {
      homes: registeredHomes,
      pageTitle: "Host Home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
