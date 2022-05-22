const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// app.get("/", (req, res) => {
//   res.send("Hello Sahil!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
