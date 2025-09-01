const http = require("http");
const fs = require("fs");
const { URLSearchParams } = require("url");

const requestHandler = (req, res) => {
  res.setHeader("content-type", "text/html");

  if (req.url === "/") {
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Myntra</title>
        </head>
        <body>
          <h1>Welcome to Catch data</h1>
          <form action="/buy-products" method="POST">
            <input type="text" placeholder="Enter your product name" name="product"/>
            <input type="text" placeholder="Enter your buget" name="buget"/>
            <input type="submit" />
          </form>
        </body>
      </html>
    `);
  } else if (req.url === "/buy-products") {
    console.log("Yes, I am inside the buy product");

    const buffer = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      buffer.push(chunk);
    });

    req.on("end", () => {
      const body = Buffer.concat(buffer).toString();
      const urlParams = new URLSearchParams(body)
      console.log("This is your url Params", urlParams)
      const bodyJSON = {}
      for(const [key, value] of urlParams.entries()){
        bodyJSON[key] = value
      }
      fs.writeFileSync("buy.txt", JSON.stringify(bodyJSON));
    });

    
    fs.writeFileSync("aman.txt", "Aman app");

    res.statusCode = 302;
    res.setHeader("Location", "/product");
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
  }
  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
