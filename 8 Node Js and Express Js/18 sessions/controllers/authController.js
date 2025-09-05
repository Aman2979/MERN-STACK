const { request } = require("express");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "login", isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
