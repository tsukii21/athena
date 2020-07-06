const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const connection = require("../database/config");

const authRouter = express.Router();
authRouter.use(bodyParser.json());

authRouter
  //registration route (/auth/register)
  .post("/register", function (req, res) {
    const newUser = req.body;
    //checking whether username and email are unique
    connection.query(
      "SELECT * FROM accounts WHERE username = ? OR email = ?",
      [newUser.username, newUser.email],
      function (error, results, fields) {
        if (results.length === 0) {
          //username and email are unique
          //proceeding with regitration
          connection.query(
            "INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?, ?,?)",
            [newUser.username, md5(newUser.password), newUser.email],
            function (error, results, fields) {
              if (!error) {
                //no errors and registration successfull
                //responding with username of new user
                res.send({ error: "", username: newUser.username });
              } else {
                //errors found and registration failed
                //responding with message
                res.send({
                  error: "Registration failed due to some error",
                  username: "",
                });
              }
            }
          );
        } else {
          //username and/or email not unique
          //responding with message
          res.send({
            error: "Username/email already taken!",
            username: "",
          });
        }
      }
    );
  })
  //login route (/auth/login)
  .post("/login", function (req, res) {
    const user = req.body;
    //checking for validity of provided credentials
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [user.username, md5(user.password)],
      function (error, results, fields) {
        if (results.length > 0) {
          //credentials provided are valid
          //responding with username
          res.send({ error: "", username: user.username });
        } else {
          //credentials provided are incorrect
          //responding with message
          res.send({
            error: "Incorrect Username and/or Password!",
            username: "",
          });
        }
      }
    );
  });

module.exports = authRouter;
