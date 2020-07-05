const express = require("express");
const bodyParser = require("body-parser");

const authRouter = express.Router();
authRouter.use(bodyParser.json());

const connection = require("../database/database");
authRouter
  .post("/register", function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    connection.query(
      "SELECT * FROM accounts WHERE username = ? OR email = ?",
      [username, email],
      function (error, results, fields) {
        if (results.length === 0) {
          connection.query(
            "INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?, ?,?)",
            [username, password, email],
            function (error, results, fields) {
              if (!error) {
                res.send({ error: "", username: username });
              } else {
                res.send({
                  error: "Registration failed due to some error",
                  username: "",
                });
              }
            }
          );
        } else {
          res.send({
            error: "Username/email already taken!",
            username: "",
          });
        }
      }
    );
  })
  .post("/login", function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          response.send({ error: "", username: username });
        } else {
          response.send({
            error: "Incorrect Username and/or Password!",
            username: "",
          });
        }
      }
    );
  });

module.exports = authRouter;
