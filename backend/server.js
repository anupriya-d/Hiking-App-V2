const express = require("express");
const app = express();

//define port number for beckend
const PORT = process.env.PORT || 8000;

require("dotenv").config();

// Require the database connection module
let dbConnect = require("./dbConnect");

app.use(express.json());

//app.use("/images", express.static("public/images"));


//main route of the backend app
app.get("/", (req, res) => {
  res.json({ messege: "Welcome to My Hiking Application" });
});

//routes related to users
//let userRoutes = require("./routes/userRoutes"); 
//app.use("/users", userRoutes);

//routes related to tracks
let trackRoutes = require("./routes/trackRoutes"); 
app.use("/tracks", trackRoutes);


// Start the server and listen on the specified port and logging a messege to console
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});