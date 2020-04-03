const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 8080;
let i = 0;

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
  // let user = "";
  // let scheme = "emoji";
  // let successes = a.length;
  // let fails = b.lenth;
  // let logins = successes + fails;
  // let successTimes = a;
  // let failTimes = a;
  // fs.appendFile(
  //   "log.csv",
  //   `${user},${scheme},${logins},${successes},${fails},${successTimes},${failTimes}\r`,
  //   err => {
  //     if (err) throw err;
  //     console.log('The "data to append" was appended to file!');
  //   }
  // );
});

app.listen(process.env.PORT || port, function(req, res) {
  console.log(`http://localhost:${port}`);
});
