//dependency imports

const express = require("express"),
  http = require("http"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser");

//app init

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//mysql connection import

const connection = require("./database/config");
connection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

//router imports

const subdomainrouter = require("./routes/subdomain");
const authRouter = require("./routes/auth");
app.use("/subdomain", subdomainrouter);
app.use("/auth", authRouter);

//server init

const server = http.createServer(app);
const hostname = "localhost";
const port = 5000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
