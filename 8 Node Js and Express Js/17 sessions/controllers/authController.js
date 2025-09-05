exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "login", isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
  res.cookie("isLoggedIn", true); // 'cookie' should be lowercase, not 'Cookie'
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  res.cookie("isLoggedIn", false); // 'cookie' should be lowercase, not 'Cookie'
  res.redirect("/login");
};
