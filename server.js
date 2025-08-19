const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome To Node Server</h1>");
// });

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
