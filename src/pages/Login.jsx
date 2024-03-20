import React, { useEffect } from "react";
import { useState } from "react";
import { useAPI } from "../api/loginAPI";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [myform, setMyform] = useState({
    username: "vishal@gmail.com",
    password: "",
  });

  const { data, setDeta, callAPI } = useAPI();

  const navigate = useNavigate();

  async function LoginSubmit(e) {
    e.preventDefault();
    callAPI(myform);
  }

  useEffect(() => {
    const user_token = localStorage.getItem("user_token");
    if (user_token) {
      navigate("/");
    }

    if (data.status == "ok") {
      if (data.data.token) {
        localStorage.setItem("user_token", data.data.token);
      }
    }
  }, [data]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6 card shadow mt-4 p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={LoginSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  value={myform.username}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setMyform({ ...myform, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={myform.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setMyform({ ...myform, password: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {data.status == "sending" ? "sending .... " : "Click for Login"}
              </button>

              {data.status == "error" ? data.msg : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
