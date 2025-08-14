const express = require("express");
const fs = require("fs");
const path = require("path");
const { URLSearchParams } = require("url");
const bodyParser = require("body-parser");

const hostRouter = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require('./util/path')

const app = express();

app.use(express.static(path.join(rootDir, "public")))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(storeRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(fs.readFileSync(path.join(rootDir, "views", "404.html")));
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
