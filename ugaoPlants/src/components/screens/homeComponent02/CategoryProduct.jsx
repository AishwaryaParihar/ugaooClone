import React from "react";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();

  return(
    <div className="mt-5">
    <div className="pt-5">{params?.categoryName}</div>
  </div>
  )
  
};

export default CategoryProduct;
