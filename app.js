const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Request received for: ${url}`);

  if (url === "/") {
    console.log("Serving homepage");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Gonder</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    console.log("Form submitted");
    fs.writeFileSync("message.txt", "DUMMY"); // Dosyaya yazma işlemi
    res.statusCode = 302; // Yönlendirme kodu
    res.setHeader("Location", "/"); // Anasayfaya yönlendirme
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
