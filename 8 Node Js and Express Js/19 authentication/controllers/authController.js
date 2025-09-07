const { check, validationResult } = require("express-validator");

const { request } = require("express");
const User = require("../models/User");

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

exports.postSignup = [
  // First Name Validator.
  check("firstName")
    .notEmpty()
    .withMessage("First name is mandatory")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name should be minimum 4 chars")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name should be only contain english latters"),

  // last Name Validator.
  check("lastName")
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("last name should be only contain english latters"),

  // Email Validator.
  check("email")
    .isEmail()
    .withMessage("Please Enter a vaild email")
    .normalizeEmail(),

  // Password Validator.
  check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should be minimum 8 chars")
    .matches(/[a-z]*/)
    .withMessage("Password should be have atleast one small alphabet")
    .matches(/[A-Z]*/)
    .withMessage("Password should be have atleast one capital alphabet")
    .matches(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?\\|]/)
    .withMessage("Password must contain at least one special character"),

  // conform Password Validator.
  check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),

  // UserType Validator.
  check("userType")
    .trim()
    .notEmpty()
    .withMessage("User type must be required")
    .isIn(["guest", "host"])
    .withMessage("User type is invaild"),

  // UserType Validator.
  check("termsAccepted")
    .notEmpty()
    .withMessage("Terms and conditions must be accepted"),

  (req, res, next) => {
    console.log("user came to signup ", req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "SignUp",
        isLoggedIn: false,
        errorMessages: errors.array().map((err) => err.msg),
        oldInput: req.body,
      });
    }

    const { firstName, lastName, email, password, userType } = req.body;
    const user = new User({ firstName, lastName, email, password, userType });

    user
      .save()
      .then((result) => {
        console.log(result);
        res.redirect("/login");
      })
      .catch((error) => {
        return res.status(422).render("auth/signup", {
          pageTitle: "SignUp",
          isLoggedIn: false,
          errorMessages: [error],
          oldInput: req.body,
        });
      });
  },
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
