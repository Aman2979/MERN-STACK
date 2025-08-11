const fs = require("fs");
const { URLSearchParams } = require("url");

const RequestHandler = (req, res) => {
  console.log("The request recieved: ", req.url, req.method);
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
      const urlParams = new URLSearchParams(body);
      console.log("This is your url Params", urlParams);
      const bodyJSON = {};
      for (const [key, value] of urlParams.entries()) {
        bodyJSON[key] = value;
      }
      fs.writeFileSync("buy.txt", JSON.stringify(bodyJSON));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/product");
    console.log("Response Sending")
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

module.exports = RequestHandler;
