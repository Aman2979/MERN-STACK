const http = require("http");

console.log("I was here too");

const requestHandler = (req, res) => {
  console.log("The request recieved: ", req.url, req.method, req.headers);
  res.setHeader("content-type", "text/html");

  if (req.url === "/") {
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Welcome to first server</h1>
      </body>
      </html>
    `);
  } else if (req.url === "/product") {
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Product</title>
      </head>
      <body>
        <h1>Welcome to Product list server</h1>
      </body>
      </html>
    `);
  } else {
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>404</title>
      </head>
      <body>
        <h1>Not found</h1>
      </body>
      </html>
    `);
  }
  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
