const express = require("express");
const fs = require("fs");
const { URLSearchParams } = require("url");
const bodyParser = require("body-parser");

const hostRouter = require("./hostRouter");
const storeRouter = require("./storeRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(hostRouter);
app.use(storeRouter);

app.use((req, res, next) => {
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
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
