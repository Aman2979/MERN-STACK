const { check } = require("express-validator");

 // First Name Validator.
  exports.firstNameValidation = check("firstName")
    .notEmpty()
    .withMessage("First name is mandatory")
    .trim()
    .isLength({ min: 4 })
    .withMessage("First name should be minimum 4 chars")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name should only contain English letters");

  // Last Name Validator.
  exports.lastNameValidation = check("lastName")
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Last name should only contain English letters");

  // Email Validator.
  exports.emailValidation = check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail();

  // Password Validator.
  exports.passwordValidation = check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should be minimum 8 chars")
    .matches(/[a-z]/)
    .withMessage("Password should have at least one small alphabet")
    .matches(/[A-Z]/)
    .withMessage("Password should have at least one capital alphabet")
    .matches(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?\\|]/)
    .withMessage("Password must contain at least one special character");

  // Confirm Password Validator.
  exports.confirmPasswordValidation = check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    });

  // UserType Validator.
  exports.userTypeValidation = check("userType")
    .trim()
    .notEmpty()
    .withMessage("User type must be required")
    .isIn(["guest", "host"])
    .withMessage("User type is invalid");

  // Terms Accepted Validator.
  exports.termsValidation = check("termsAccepted")
    .notEmpty()
    .withMessage("Terms and conditions must be accepted");