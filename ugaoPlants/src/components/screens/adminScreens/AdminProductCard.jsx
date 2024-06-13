import React, { useState } from "react";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../../../helper/displayCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="admin-product-card bg-light p-2">
      <div className="text-center position-relative">
        <img
          className="adminProductCardImage"
          src={data?.productImage[0]}
          width={150}
          height={150}
          alt=""
        />
        <h6 className="mt-1">{data?.productName}</h6>
        <div>
          <p className="fw-bold">
            {
              displayINRCurrency(data.sellingPrice)

            }
          
          </p>
          <div className="position-fixed-bottom" onClick={() => setEditProduct(true)}>
            <i class="fa-solid fa-pen bg-success px-5 p-2 rounded text-white  "></i>
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
