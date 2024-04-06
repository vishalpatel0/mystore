import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInfoAPI } from "../api/productInfoAPI";


const Product = () => {
  // product id come from URL in object with set key in main file rout path
  const { product_id } = useParams();

  // call custom Hook ProductInfoAPI
  const { reporting, CallAPI } = useProductInfoAPI();


  console.log(reporting);

  useEffect(() => {
    CallAPI(product_id);
  }, []);

  const [product, setProduct] = useState({});
  useEffect(() => {
    if (reporting.data) {
      setProduct(reporting.data);
    }
  }, [reporting]);

  return (
    <div className="bg-light mt-4">
            {Object.keys(product).length !== 0 && (
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
            <button class="btn btn-primary" type="submit">
                    Add To Cart
            </button>
          </div>
        </div>
   
      
      </div>
         )
        }
    </div>
  );
};

export default Product;
