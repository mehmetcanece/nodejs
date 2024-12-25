const http = require("http");

const { parse } = require("path");

const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
