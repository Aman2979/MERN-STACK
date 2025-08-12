const fs = require("fs");
const { URLSearchParams } = require("url");

const RequestHandler = (req, res) => {
  console.log("The request recieved: ", req.url, req.method);
  res.setHeader("content-type", "text/html");

  if (req.url === "/") {
  } else if (req.url === "/buy-products") {
    
  } else if (req.url === "/product") {
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Product</title>
      </head>
      <body style="background: #555;">
        <h1>Welcome to Product list server</h1>
      </body>
      </html>
      `);
    res.end();
  } else {
    res.statusCode = 404;
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>404</title>
      </head>
      <body>
        <h1>404 Not found</h1>
      </body>
      </html>
    `);
    res.end();
  }
};

module.exports = RequestHandler;
