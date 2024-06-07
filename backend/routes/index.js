const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/useSignUp");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails");
const userLogoutController = require("../controller/userLogout");
const authToken = require("../middleware/authToken");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);

module.exports = router;
