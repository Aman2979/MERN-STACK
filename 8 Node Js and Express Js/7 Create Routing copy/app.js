const express = require("express");
const fs = require("fs");
const { URLSearchParams } = require("url");

const app = express();

app.use((req, res, next) => {
  console.log("The request recieved", req.url, res.method);
  next();
});

app.get("/",(req, res, next) => {
    res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Myntra</title>
        </head>
        <body style="background: #555;">
          <h1>Welcome to Catch data</h1>
          <form action="/buy-products" method="POST">
            <input type="text" placeholder="Enter your product name" name="product"/>
            <input type="text" placeholder="Enter your buget" name="buget"/>
            <input type="submit" />
          </form>
        </body>
      </html>
    `);
});

app.post("/buy-products", (req, res, next) =>{
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
        fs.writeFileSync("buy.txt", JSON.stringify(bodyJSON), () => {
          res.statusCode = 302;
          res.setHeader("Location", "/product");
          res.end();
          console.log("Response Sending");
        });
      });
})

app.get("/product", (req, res, next) =>{
  res.send(`
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
})

app.use((req, res, next) =>{
  res.statusCode = 404;
    res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>404</title>
      </head>
      <body style="background: #555;">
        <h1>404 Not found</h1>
      </body>
      </html>
    `);
    res.end();
})

// const server = http.createServer(app);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
