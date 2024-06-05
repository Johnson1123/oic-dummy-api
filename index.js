// const http = require("http");

// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   console.log(res);
//   res.write("Welcome to backend");
//   res.end();
// });

// server.listen(4000, () => {
//   console.log("server running on port 4000");
// });

import express from "express";
import Cars from "./data/car.js";
import mall from "./data/product.js";
import dogs from "./data/dogs.js";
import phone from "./data/phone.js";
import hotel from "./data/hotel.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const allProduct = [...Cars, ...mall, ...dogs, ...phone, ...hotel];

app.get("/", (req, res) => {
  res.send(allProduct);
});
app.get("/mall", (req, res) => {
  res.json({
    success: true,
    category: "Mall",
    data: mall,
  });
});
app.get("/phones", (req, res) => {
  res.json({
    success: true,
    category: "Phones",
    data: phone,
  });
});
app.get("/cars", (req, res) => {
  res.json({
    success: true,
    category: "car",
    data: Cars,
  });
});
app.get("/dogs", (req, res) => {
  res.json({
    success: true,
    category: "dog",
    data: dogs,
  });
});
app.get("/hotels", (req, res) => {
  res.json({
    success: true,
    category: "hotel",
    data: hotel,
  });
});

app.listen(4000, () => console.log("server is running in port 4000"));
