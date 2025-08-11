// Core Module
// const http = require("http");
// Coustam module
// const RequestHandler = require("./RequestHandler");

const express = require("express");

const app = express();

// First Middleware
app.use("/",(req, res, next) => {
  console.log("First Middleware", req.url, res.method);
  next();
});

// Second Middleware
app.get("/test",(req, res, next) => {
  console.log("Second Middleware", req.url, res.method);
  res.send('<h1>Complete DSA In Java</h1>')
});

// const server = http.createServer(app);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
