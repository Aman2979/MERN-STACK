const { request } = require("express");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "login", isLoggedIn: false });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", { pageTitle: "login", isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postSignup = (req, res, next) => {
  console.log("user came to signup", req.body);
  res.redirect("/login");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
