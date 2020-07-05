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

const connection = require("./database/database");
connection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

const subdomainrouter = require("./routes/subdomain");
const authRouter = require("./routes/auth");

app.use("/subdomain", subdomainrouter);
app.use("/auth", authRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
