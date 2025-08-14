const express = require("express");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Home</title>
        </head>
        <body style="background: #555;">
          <h1>Home Page</h1>
          <a href="/add-home">Add Home</a>
        </body>
      </html>
    `);
});
module.exports = storeRouter;
