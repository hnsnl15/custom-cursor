const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, "public");
const server = http.createServer(app);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}\index.html`);
});

server.listen(port, () => {
  console.log(`Server listing at http://localhost:${port}`);
});
