let cp = require("child_process")
console.log("trying to open website");
// cp.execSync("calc")
// cp.execSync("start chrome https:\\www.pepcoding.com")
console.log("opened ");
let output = cp.execSync("node abc.js")
console.log("output" + output)