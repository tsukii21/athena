const express = require("express"),
  http = require("http"),
  cors = require("cors");

const hostname = "localhost";
const port = 5000;

const morgan = require("morgan");

const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const subdomainrouter = require("./routes/subdomain");

app.use("/subdomain", subdomainrouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});