const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const JWT_SECRET = "Sahilthedeveloper";
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchUser");

//Route 1:  Create a user using POST "/api/auth/createUser" . No login required
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);

    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //  try - catch
    try {
      // finding whether email already exists in database
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      // Password hashing
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtToken = jwt.sign(data, JWT_SECRET);
      console.log(jwtToken);

      res.json({ jwtToken });

      //res.json({ user });
      // .then((user) => res.json(user))
      // .catch((err) => {
      //   console.log("Error occured !");
      //   res.json({
      //     error: "Please enter a unique value for email ",
      //     message: err.message,
      //   });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured !");
    }
  }
);

// res.send(req.body);
//   }
// );

//Route2 : Authenticate a user using POST "/api/auth/login" . No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //console.log(req.body);

    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials !" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials !" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      const jwtToken = jwt.sign(payload, JWT_SECRET);
      res.json({ jwtToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal error occured !");
    }
  }
);

// Route3 : Get login User details using: POST "/api/auth/getuser" . login required

router.post("/getuser", fetchuser, async (req, res) => {
  // middleware

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured !");
  }
});

module.exports = router;
