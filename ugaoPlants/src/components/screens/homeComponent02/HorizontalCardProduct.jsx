import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../../../helper/fetchCategoryWiseProduct";
import { Card, Button, Badge } from "react-bootstrap"; // Assuming you're using react-bootstrap for UI components
import { Link } from "react-router-dom";
import Context from "../../../context";
import addToCart from "../../../helper/addToCart"; 


const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(4).fill(null);

  const {fetchUserAddtoCart} = useContext(Context)

  const handleAddToCart = async(e,id)=>{
    await addToCart(e,id)
    fetchUserAddtoCart()
 }



  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Limit to 4 placeholders for loading state

  return (
    <div className="container-fluid p-5">
      <div className="heading py-3">
        <h2> {heading}</h2>
      </div>
      <div className="row">
        {loading
          ? loadingList.map((_, index) => (
              <div key={index} className="col-6 col-md-3">
                <Card className="border-0">
                  <Card.Body>
                    <div className="placeholder-glow">
                      <div
                        className="placeholder bg-secondary"
                        style={{ height: "200px" }}
                      ></div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          : // Limit to 4 products
            data.slice(0, 4).map((product, index) => (
              <div key={index} className="col-6 col-md-3">
                <Card className="border-0">
                  <Link to={"product/" + product?._id} className="nolink">
                    <div className="textdecor position-relative">
                      <img
                        src={product.productImage[0]}
                        alt=""
                        className="bextpick"
                      />
                      <Badge
                        bg="warning"
                        text="dark"
                        className="position-absolute rounded-0 text-uppercase p-2 sale-badge"
                      >
                        sale
                      </Badge>
                    </div>
                    <Card.Body className="p-2 m-0">
                      <Card.Title>{product.productName}</Card.Title>
                      <div className="bestProductName pt-2 pb-3"></div>
                      <div className="star-rating">
                        {Array.from({ length: 5 }, (v, i) => (
                          <i
                            key={i}
                            className={`fas fa-star text-warning ${
                              product.rating > i ? "checked" : ""
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-success h6 py-3">
                        <del className="text-secondary">
                          <i className="fa-solid fa-indian-rupee-sign point12px"></i>
                          {product.price}
                        </del>
                        {"  "}From
                        <i className="fa-solid fa-indian-rupee-sign point12px"></i>
                        {product.sellingPrice}
                      </p>
                      <Button className="w-100 btn btn-success rounded-0 text-uppercase" onClick={(e)=>handleAddToCart(e,product?._id)}>
                        View Product
                      </Button>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            ))}
        <div className="viewall my-5 d-flex justify-content-center">
          <Button className="px-5 btn btn-success rounded-0 text-uppercase rounded-1">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardProduct;
