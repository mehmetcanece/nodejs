const fs = require("fs");

const requestHandler = (req, res) => {
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
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

//module.exports = requestHandler;

/* module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
}; */

//module.exports.handler = requestHandler;
//module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
