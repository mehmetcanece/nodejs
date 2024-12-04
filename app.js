const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
<<<<<<< HEAD
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
=======
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Gonder</button></form></body>'
>>>>>>> servers
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
<<<<<<< HEAD
    fs.writeFileSync("message.txt", "DUMMY");
=======
    fs.writeFileSync("message.txt", "DUMMY"); // bu kodu yazdığında server kapanıyor, hard exit.
>>>>>>> servers
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
<<<<<<< HEAD
  console.log("App is running");
=======

>>>>>>> servers
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
