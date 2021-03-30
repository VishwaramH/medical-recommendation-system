const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const cors = require("cors");
const port = process.env.PORT || 8000;

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routes);

app.listen(port, () => console.log("Server running!"));
