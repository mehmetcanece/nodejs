const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // url / olarak dönüyor çünkü sadece local host 3000 var, methodumuz GET, headers ise objeyi dönüyor.
  /*   process.exit(); //bunu yazadığında server kapanıyor, hard exit.
   */
});

server.listen(3000);
