import { exec, execSync } from "child_process";
import path from "path";
import fs from "fs";

const data = fs.readFileSync("./package.json");
const obj = JSON.parse(data);

var lastCommit = 'git log -n 1 --pretty=format:"%H"';
var date = new Date();

var res = execSync(lastCommit).toString();

var packageInfo = {
  lastCommit: res.substring(0, 8),
  date: date,
  version: obj.version,
  repository: obj.repository,
};
fs.writeFile("./src/sign.json", JSON.stringify(packageInfo), (err) => {
  if (err) {
    console.log(err);
  }
});
