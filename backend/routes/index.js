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
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const filterProductController = require("../controller/product/filterProduct");
const searchProduct = require('../controller/product/searchProduct')

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
router.post("/product-details",getProductDetails)
router.post("/filter-product",filterProductController)
router.get("/search",searchProduct)


// use add to cart 
router.post("/addtoCart",authToken,  addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)
router.post("/update-cart-product",authToken , updateAddToCartProduct )
router.post("/delete-cart-product",authToken , deleteAddToCartProduct)




module.exports = router;
