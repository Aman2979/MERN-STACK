const http = require("http");
const RequestHandler = require("./RequestHandler");


const server = http.createServer(RequestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
