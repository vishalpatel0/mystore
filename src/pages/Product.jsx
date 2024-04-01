import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInfoAPI } from "../api/productInfoAPI";
const Product = () => {
  // product id come from URL in object with set key in main file rout path
  const { product_id } = useParams();

  // call custom Hook ProductInfoAPI
  const { reporting, CallAPI } = useProductInfoAPI();
  const [product, setProduct] = useState({});

  console.log(reporting);

  useEffect(() => {
    CallAPI(product_id);
  }, []);

  useEffect(() => {
    if (reporting.data) {
      setProduct(reporting.data);
    }
  }, [reporting]);

  return (
    <div className="bg-light">
      <div className="container pt-4 card shadow">
        <div className="row pt-4  ">
          <div className="col-md-6 ">
            <img
              className="p-4  d-flex justify-content-center"
              style={{ height: "auto", maxWidth: "100%" }}
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="col-md-4">
            <span className="badge rounded-pill bg-warning text-dark ">
              {product.category}
            </span>
            <h1>{product.title}</h1>

            <p>{product.description}</p>
            <hr />
            <p>
              <b>Price : {product.price} Rs. </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
