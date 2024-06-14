const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/useSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const userLogoutController = require("../controller/user/userLogout");
const UploadProductController = require("../controller/product/uploadProduct")
const authToken = require("../middleware/authToken");

const allUsers = require("../controller/user/allusers");
const updateUser = require("../controller/user/updateUser");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProductc = require("../controller/product/getCategoryWiseProduct");
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);

//admin panel

router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)


//  product 
router.post("/upload-product", authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product", authToken ,updateProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product",getCategoryWiseProductc)




module.exports = router;
