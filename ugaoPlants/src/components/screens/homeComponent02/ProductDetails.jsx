import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../../../common/Index";
// import SeedsHero from "../SeedsComponents/SeedsHero";
import { Badge } from "react-bootstrap";
import "./productDetails.css";
import displayINRCurrency from "../../../helper/displayCurrency";
import shipping from "../../../assets/shipping.avif";
import gr from "../../../assets/GuaranteedReturn.avif";
import expertG from "../../../assets/expertguidence.webp";
import ProductAccordian from "./ProductAccordian";
import SocialMedia from "./SocialMedia";
import FAQ from "./FAQ";
import CategoryWiseProductDisplay from "./CategoryWiseProductDisplay";
import addToCart from "../../../helper/addToCart";

import Context from '../../../context/index';

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: " ",
    brandName: " ",
    category: " ",
    productImage: [],
    description: "",
    price: " ",
    sellingPrice: " ",
  });
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [count, setCount] = useState(1);

  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });

  // const [zoomImage, setZoomImage] = useState(false);

  const { fetchUserAddToCart } = useContext(Context)

  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    const dataReponse = await response.json();
    setLoading(false);
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.productImage[0]);
  };

  console.log("data", data);

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  // const handleZoomImage = useCallback(
  //   (e) => {
  //     setZoomImage(true);
  //     const { left, top, width, height } = e.target.getBoundingClientRect();
  //     console.log("coordinate", left, top, width, height);

  //     const x = (e.clientX - left) / width;
  //     const y = (e.clientY - top) / height;

  //     setZoomImageCoordinate({
  //       x,
  //       y,
  //     });
  //   },
  //   [zoomImageCoordinate]
  // );

  // const handleLeaveImageZoom = () => {
  //   setZoomImage(false);
  // };

  const handleAddToCart = async(e,id)=>{
    await addToCart(e,id)
    fetchUserAddToCart()
 }

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <>
      {/* <SeedsHero /> */}
      <div className="container-fluid p-5 mt-5">
        <div className="row pt-5">
          {/* product image  */}
          <div className="col-md-6 ">
            <div className="main-img-container">
              <img
                src={activeImage}
                alt=""
                className="img-fluid w-100 h-100 border"
              />
            </div>
            <div className="d-flex gap-2 justify-content-center">
              {loading ? (
                <div className="">
                  {productImageListLoading.map((el, index) => (
                    <div className="" key={+index}>
                      loading...
                    </div>
                  ))}
                </div>
              ) : (
                <div className="d-flex gap-2 justify-content-center mt-4">
                  {data?.productImage?.map((imgURL, index) => (
                    <div className="" key={imgURL}>
                      <div className="">
                        <img
                          src={imgURL}
                          alt=""
                          className="productDetailsImg img-fluid pointerClass"
                          onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                          onClick={() => handleMouseEnterProduct(imgURL)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* product details  */}
          <div className="col-md-6 ">
            <h2> {data?.productName} </h2>
            <p className="h5 lh-lg py-3">
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i> 4.8
            </p>
            <p className="text-success fs-3">
              {" "}
              <del className="text-secondary fs-5">
                {displayINRCurrency(data?.price)}
              </del>{" "}
              {displayINRCurrency(data?.sellingPrice)}{" "}
              <Badge
                bg="warning"
                text="dark"
                className="rounded-0 text-success fs-6"
              >
                Sale{" "}
              </Badge>
            </p>
            <div className="buy-product">
              <div className="count-product my-3 ">
                <button
                  className="btn minus border-0"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  <span className="minus-circle">
                    <span className="minus-sign">-</span>
                  </span>
                </button>
                <input
                  type="text"
                  aria-label="First name"
                  className="text-center noOfProduct border-0"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button
                  className="btn plus border-0"
                  onClick={() => setCount(count + 1)}
                >
                  <span className="plus-circle">
                    <span className="plus-sign">+</span>
                  </span>
                </button>
                <button className="btn btn-success text-uppercase add-cart-btn" onClick={(e)=>handleAddToCart
                  (e,data?._id)}>
                  {" "}
                  Add to cart{" "}
                </button>
              </div>
              <button
                type="button"
                className="btn border border-success text-success text-uppercase buy-it"
                onClick={(e)=>handleBuyProduct(e,data?._id)}
              >
                buy it now
              </button>

              <ProductAccordian />
              <p className="buy-it mt-4 ">
                <a
                  href=""
                  className="nolink text-decoration-underline text-uppercase"
                >
                  VIEW LIGHT GUIDE{" "}
                </a>
                <div className="d-flex justify-content-between ">
                  <div className="text-center">
                    <img src={shipping} className="w-75" alt="" />
                    <p className="">
                      Free Shipping <br /> above ₹499
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={gr} className="w-75" alt="" />
                    <p className="">
                      Guaranteed <br /> Replacements if <br /> Damaged
                    </p>
                  </div>
                  <div className="text-center">
                    <img src={expertG} className="w-75" alt="" />
                    <p className="">Expert Guidance</p>
                  </div>
                </div>

                <SocialMedia />
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="custom-rich-text02 text-center">
          <div className="page-width">
            <h2 className="heading02 my-3 px-1">About the Product</h2>
            <p className="fs-5">{data?.description}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img src={data?.productImage[0]} alt="" className="h-100 w-100" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-start">
            <div className="">
              <h2>What’s in the Box</h2>
              <ul className="text-secondary fs-5">
                <li>{data?.productName} Plant with Pot: 15 - 20 cm</li>
                <li>Pot Size: 4 inch diameter </li>
                <li>Soil Media:Soil+Coco Peat+Coco Chips</li>
                <li>Recyclable box</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {
        data.category && (
        <CategoryWiseProductDisplay
        category={data.category}
        heading={"Customers also bought"}
      />
        )
      }
      <FAQ />
    </>
  );
};

export default ProductDetails;
