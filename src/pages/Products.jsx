import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { CartUse } from "../context/Cart";

const Products = () => {
  const { add } = CartUse();

  // use Loader Data like > API value
  const MyData = useLoaderData();

  const [data, setData] = useState();

  // search Filter
  const [mySearch, setMySearch] = useState("");

  // search Filter on typing
  useEffect(() => {
    if (mySearch.length > 0) {
      const searchFilter = data.filter((product) =>
        product.title.toLowerCase().includes(mySearch.toLowerCase())
      );
      setData(searchFilter);
    } else {
      setData(MyData);
    }
  }, [mySearch]);

  // search Filter on submit Button
  function serchbar(e) {
    e.preventDefault();
    if (mySearch.length >= 3) {
      const searchFilter = data.filter((product) =>
        product.title.toLowerCase().includes(mySearch.toLowerCase())
      );
      setData(searchFilter);
    } else {
      setData(MyData);
    }
  }

  // price filter
  function priceFilter(e) {
    const { value } = e.target;
    if (value == "low_high") {
      const filterdata2 = [...data].sort((a, b) => a.price - b.price);
      setData(filterdata2);
    } else if (value == "high_low") {
      const filterdata = [...data].sort((a, b) => b.price - a.price);
      setData(filterdata);
    } else {
      setData(MyData);
    }
  }

  return (
    <div className="bg-light">
      <div className="container pt-4">
        {/* /// filter  */}
        <div className="row ">
          <div className="col-2">
            <select
              className="form-select"
              onChange={priceFilter}
              aria-label="Default select example"
            >
              <option value="clear" defaultValue>
                Select Price Filter
              </option>
              <option value="low_high">Low to High</option>
              <option value="high_low">High to Low</option>
            </select>
          </div>
          <div className="col-6"></div>
          <div className="col-4">
            <form className="d-flex" onSubmit={serchbar}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={mySearch}
                onChange={(e) => setMySearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <hr />

        {/* products list  */}
        <div className="row pt-4">
          {
            // api array print
            data?.map((val, index) => (
              <div key={index} className="col-sm-4 ">
                <div className="shadow p-1 mb-4 me-3 text-center produsts_list  card">
                  <Link to={`/product/${val.id}`}>
                    <div className="m-2  p-3 ">
                      <div className="title-container ">
                        <div className="title">{val.title}</div>
                      </div>
                      <img
                        className="p-4 "
                        style={{
                          maxWidth: "100%",
                          height: "200px",
                          width: "auto",
                        }}
                        src={val.image}
                        alt={val.title}
                      />
                      <br />
                      <p>Price : {val.price} Rs.</p>
                    </div>
                  </Link>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => {
                      add(val.id, 1);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
