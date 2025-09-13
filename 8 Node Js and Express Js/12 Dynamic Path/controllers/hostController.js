const Home = require("./../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {editing:false, pageTitle: "Host Your Home" });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  if (!editing) {
    console.log("Editing Flag is not set properly");
    return res.redirect("/host/host-homes");
  }

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      editing: editing,
      pageTitle: "Edit Your Home",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHouse = new Home(houseName, price, location, rating, photoUrl);
  newHouse.save((err) => {
    if (err) {
      res.redirect("/");
    } else {
      res.render("host/home-added", { pageTitle: "Home Hosted" });
    }
  });
};

exports.postEditHome = (req, res, next) =>{
  const {id, houseName, price, location, rating, photoUrl } = req.body;
  const newHouse = new Home(houseName, price, location, rating, photoUrl);
  newHouse.id = id
  newHouse.save((err) => {
    if (err) {
      console.log("Error while updating home", err)
    } else {
     res.redirect("/host/host-homes");
    }
  });
}

exports.postDeleteHome = (req, res, next) =>{
  const homeId = req.params.homeId
  console.log("Came to delete ", homeId)
  Home.deletById(homeId, error =>{
    if(error){
      console.log("Error on deleting time", error)
    }
    res.redirect("/host/host-homes")
    
  })
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-homes", {
      homes: registeredHomes,
      pageTitle: "Host Home",
    });
  });
};
