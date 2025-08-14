const express = require('express')

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) =>{
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Add Home</title>
      </head>
      <body>
      <h1>Add your home</h1>
        <form action="/add-home" method="POST">
          <input type="text" name="HouseName" placeholder="Enter your House Name">
        <input type="submit" value="ADD HOME">
        </form>
      </body>
    </html>
    `)
})

hostRouter.post("/add-home", (req, res, next) =>{
  console.log(req.body)
  console.log("Added Success")
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Home Added</title>
      </head>
      <body>
        <h1>Home Added Successfully</h1>
        <a href="/">Go to home</a>
      </body>
      </html>
    `)
})

module.exports = hostRouter;