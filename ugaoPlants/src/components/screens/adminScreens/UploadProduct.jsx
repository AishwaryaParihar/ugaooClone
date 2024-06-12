import React, { useState } from "react";
import "../adminScreens/Admin.css";
import ProductCategory from "../../../helper/ProductCategory";
import UploadImage from "../../../helper/UploadImage";
import DisplayImage from "./DisplayImage";

export const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);

  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("imageIndex", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };

  return (
    <div className="position-fixed   uploadopacity top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
      <div className=" p-3 rounded uplaod-product">
        <div className=" d-flex justify-content-between">
          <h3 className="fw-bold ">Upload Product</h3>
          <i
            className="fa-solid fa-xmark fs-3 pointerClass"
            onClick={onClose}
          ></i>
        </div>
        <form action="" className="row p-4 gap-2 fw-bolder pb-4">
          <label className="" htmlFor="productName">
            {" "}
            Product Name :
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product  Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light upload-product-inputs"
          />

          <label htmlFor="brandName"> Brand Name :</label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter Brand  Name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          />

          <label htmlFor="category"> Category</label>
          <select
            name="category"
            id="category"
            value={data.category}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          >
            {ProductCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage"> Product Image :</label>
          <label htmlFor="uploadImageInput">
            <div className=" bg-light rounded  input-img d-flex justify-content-center align-items-center pointerClass">
              <div className="text-center">
                <i class="fa-solid fa-cloud-arrow-up fa-2xl text-secondary"></i>
                <p className="fw-normal text-secondary pt-2">
                  {" "}
                  Upload Peoduct Image
                </p>
                <input
                  className="d-none"
                  type="file"
                  id="uploadImageInput"
                  onChange={handleUploadProduct}
                />
              </div>
            </div>
          </label>
          <div className="">
            {data?.productImage[0] ? (
              <div className="d-flex flex-wrap align-items-center gap-2">
                {data.productImage.map((el, index) => {
                  return (
                    <div className="position-relative small-img-box ">
                      <img
                        src={el}
                        alt={el}
                        width={103.5}
                        height={103.5}
                        className="bg-light border pointerClass"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />
                      <div
                        className="pointerClass position-absolute bottom-0 end-0 p-1 px-2 bg-danger text-white rounded-5 delete-icon"
                        onClick={() => handleDeleteProductImage(index)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-success fw-normal ">
                *Please Upload product image
              </p>
            )}
          </div>

          <button className="btn btn-success m-0">Uplaad Product</button>

          <label htmlFor="price"> Price :</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Product price"
            name="price"
            value={data.price}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          />

          <label htmlFor="sellingPrice"> Selling Price :</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter Product Selling Price"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          />



          
          <label htmlFor="sellingPrice"> Selling Price :</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter Product Selling Price"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          />
        </form>
      </div>

      {/* display image full screen */}

      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};
