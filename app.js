const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Gonder</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk); // parselanmamış buffer olarak numaralar gelir
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1]; //eşittirin yanındakini alıyoruz yani öncesini önemsemiycez.
      console.log(message); //parselanmış şekilde textbox içindeki yazı gelir, form içine yazdığımdan orada name message demiştim message = gibi yazar
      fs.writeFileSync("message.txt", message); // Dosyaya message içine parseladığımız yazma işlemi
    });

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
