import React, { useState } from "react";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../../../helper/displayCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className=" bg-light p-2">
      <div className="">
        <img
          className="adminProductCardImage"
          src={data?.productImage[0]}
          width={150}
          height={150}
          alt=""
        />
        <h5>{data?.productName}</h5>
        <div>
          <p className="fw-bold">
            {
              displayINRCurrency(data.sellingPrice)

            }
          
          </p>
          <div className="" onClick={() => setEditProduct(true)}>
            <i class="fa-solid fa-pen bg-success p-2 rounded-circle text-white"></i>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
