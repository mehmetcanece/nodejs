const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // url / olarak dönüyor çünkü sadece local host 3000 var, methodumuz GET, headers ise objeyi dönüyor.
  /*   process.exit(); //bunu yazadığında server kapanıyor, hard exit.
   */
  res.setHeader("Content-Type", "text/html");
  res.write("<html>"); // responsa yazdığımız şeyler
  res.write("<head><title>İlk Sayfam</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  //res.end(); buraya bir şey yazamayız çünkü res.end() dan sonra çalışmaz.
});

server.listen(3000);
