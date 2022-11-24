import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Login data" + data.email + " " + data.password);
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect and save the auth token
      localStorage.setItem("token", json.jwtToken);
      navigate("/");
    } else {
      alert("wrong password");
    }
  };

  return (
    <>
      <div style={{ width: "60vw", margin: "auto" }}>
        <div className="my-4">
          <h1>Login </h1>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={data.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChange}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
