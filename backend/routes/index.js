const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/useSignUp");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails");
const userLogoutController = require("../controller/userLogout");
const UploadProductController = require("../controller/uploadProduct")
const authToken = require("../middleware/authToken");

const allUsers = require("../controller/allusers");
const updateUser = require("../controller/updateUser");
const getProductController = require("../controller/getProduct");
const updateProductController = require("../controller/updateProduct");
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);

//admin panel

router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)


// upload product 
router.post("/upload-product", authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product", authToken ,updateProductController)





module.exports = router;
