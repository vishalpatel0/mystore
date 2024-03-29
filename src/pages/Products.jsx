import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  // use Loader Data like > API value
  const data = useLoaderData();

  return (
    <div>
      <div className="row">
        {
          // api array print
          data?.map((val, index) => (
            <div key={index} className="card p-4 col-4">
              <h1>{val.title}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Products;
