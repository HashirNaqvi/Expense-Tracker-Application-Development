const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS middleware
const userRouter = require("./routes/UserRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Expensedb")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

// Enable CORS for all requests or a specific origin
app.use(cors()); // Allow all origins
// OR to allow only specific origins, uncomment the line below:
// app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON
app.use(express.json());

// Define Routes
app.use("/", userRouter);

// Error Handler Middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
