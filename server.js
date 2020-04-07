/**
 * server that serves the build version of our react app
 * logs information from website password scheme into log.csv
 */

const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 8000;
const cors = require("cors");
let i = 0;

app.use("*", cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/log", (req, res) => {
  i = i + 1;
  console.log(`post ${i}`);
  console.log(req.body);
  res.status(200).send(JSON.stringify(req.body));
  let sTimes = "[]";
  if (req.body.successTimes.length > 0) {
    sTimes = req.body.successTimes;
    sTimes = sTimes.join(".");
    sTimes = "[" + sTimes + "]";
  }
  let fTimes = "[]";
  if (req.body.failTimes.length > 0) {
    fTimes = req.body.failTimes;
    fTimes = fTimes.join(".");
    fTimes = "[" + fTimes + "]";
  }
  let user = req.body.userid;
  let scheme = "emoji";
  let successes = req.body.successTimes.length;
  let fails = req.body.failTimes.length;
  let logins = successes + fails;
  let successTimes = sTimes;
  let failTimes = fTimes;
  fs.appendFile(
    "log.csv",
    `${user},${scheme},${logins},${successes},${fails},${successTimes},${failTimes}\n`,
    (err) => {
      if (err) throw err;
      console.log(
        `${user},${scheme},${logins},${successes},${fails},${successTimes},${failTimes}`
      );
      console.log("appended to log.csv");
    }
  );
});

app.listen(port, (req, res) => {
  console.log(
    `visit website @ https://comp3008-w20.scs.carleton.ca/comp3008_47/`
  );
  // console.log(`visit website @ localhost:8000`);
});
