import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SummaryApi from "../../../common/Index";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

   const categoryLoading = new Array(13).fill(null)

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();

   
  }, []);
  return (
    <div className="container-fluid px-5 pt-5">
      <div className="heading">
        <h2>Your Best Picks</h2>
      </div>
      <div className="row my-4">
        {loading && <p>Loading...</p>}
        {!loading &&
          categoryProduct
            .map((product, index) => (
              <div key={index} className="col-6 col-md-3">
                <Link to={"/product-category/"+product?.category} className="textdecor h5">
                  <div className="bestimg">
                    <img
                      src={product?.productImage[0]}
                      alt={product.category}
                      className="bextpick"
                    />
                  </div>
                  <p className="text-center py-2 text-capitalize">{product.category}</p>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CategoryList;
