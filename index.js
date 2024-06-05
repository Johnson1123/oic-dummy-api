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

const app = express();

const allProduct = [...Cars, ...mall, ...dogs, ...phone];

app.get("/", (req, res) => {
  res.send(allProduct);
});

app.listen(4000, () => console.log("server is running in port 4000"));
