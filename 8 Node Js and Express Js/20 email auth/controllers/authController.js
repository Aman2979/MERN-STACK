const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const sendGrid = require("@sendgrid/mail");
const SEND_GRID_KEY =
  " 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";

sendGrid.setApiKey(SEND_GRID_KEY);

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "login", isLoggedIn: false });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", { pageTitle: "login", isLoggedIn: false });
};

exports.postLogin = async (req, res, next) => {
  const { password, email } = req.body;
  console.log(password, email);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Password does not match");
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save();
    res.redirect("/");
  } catch (err) {
    res.render("auth/login", {
      pageTitle: "login",
      isLoggedIn: false,
      errorMessages: [err.message],
    });
  }
};

exports.postSignup = [
  // First Name Validator.
  check("firstName")
    .notEmpty()
    .withMessage("First name is mandatory")
    .trim()
    .isLength({ min: 4 })
    .withMessage("First name should be minimum 4 chars")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name should only contain English letters"),

  // Last Name Validator.
  check("lastName")
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Last name should only contain English letters"),

  // Email Validator.
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Password Validator.
  check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should be minimum 8 chars")
    .matches(/[a-z]/)
    .withMessage("Password should have at least one small alphabet")
    .matches(/[A-Z]/)
    .withMessage("Password should have at least one capital alphabet")
    .matches(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?\\|]/)
    .withMessage("Password must contain at least one special character"),

  // Confirm Password Validator.
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
    .withMessage("User type is invalid"),

  // Terms Accepted Validator.
  check("termsAccepted")
    .notEmpty()
    .withMessage("Terms and conditions must be accepted"),

  async (req, res, next) => {
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

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      });
      await user.save();

      const welcomeEmail = {
        to: email,
        from: "amankumar297989@gmail.com",
        subject: "Welcome to Airbnb",
        html: `<h1>Welcome ${firstName} ${lastName}! Please book your first vacation home with us.</h1>`,
      };

      await sendGrid.send(welcomeEmail);

      return res.redirect("/login");
    } catch (err) {
      return res.status(422).render("auth/signup", {
        pageTitle: "SignUp",
        isLoggedIn: false,
        errorMessages: [err.message],
        oldInput: req.body,
      });
    }
  },
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
