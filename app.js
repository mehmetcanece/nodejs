const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers); // url / olarak dönüyor çünkü sadece local host 3000 var, methodumuz GET, headers ise objeyi dönüyor.

  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>"); // responsa yazdığımız şeyler
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Gonder</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY"); // bu kodu yazdığında server kapanıyor, hard exit.
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  /*   process.exit(); //bunu yazadığında server kapanıyor, hard exit.
   */
  res.setHeader("Content-Type", "text/html");
  res.write("<html>"); // responsa yazdığımız şeyler
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  return res.end();
});

server.listen(3000);
