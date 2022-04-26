const { exec } = require("child_process");

var lastCommit = 'git log -n 1 --pretty=format:"%H"';
var date = new Date();
fs = require("fs");

exec(lastCommit, (error, stdout, stderr) => {
  var package = {
    lastCommit: stdout.substring(0, 8),
    date: date,
  };
  fs.writeFile("./src/sign.json", JSON.stringify(package), (err) => {});
});
