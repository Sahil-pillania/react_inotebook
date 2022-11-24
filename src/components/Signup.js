import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    //console.log("Login data" + data.email + " " + data.password);
    const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect and save the auth token
      localStorage.setItem("token", json.jwtToken);
      //alert("User has been created. Fill the details to login");
      navigate("/login");
      props.showAlert("Successfully Signup", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  return (
    <>
      <div style={{ width: "60vw", margin: "auto" }}>
        <div className="my-4">
          <h1>Sign up </h1>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="exampleInput">Enter Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              onChange={onChange}
              aria-describedby="Help"
              placeholder="Enter data"
              required
              minLength={3}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInput">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={onChange}
              aria-describedby="Help"
              placeholder="Enter data"
              required
              minLength={3}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInput">Enter Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={onChange}
              aria-describedby="Help"
              placeholder="Enter data"
              required
              minLength={3}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInput">Enter Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
              onChange={onChange}
              aria-describedby="Help"
              placeholder="Enter data"
              required
              minLength={3}
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
