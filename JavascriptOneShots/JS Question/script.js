const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Principal (p): ", function(p) {
  rl.question("Enter Rate (r): ", function(r) {
    rl.question("Enter Time (t): ", function(t) {
      let si = (parseFloat(p) * parseFloat(r) * parseFloat(t)) / 100;
      console.log("Simple Interest =", si);
      rl.close();
    });
  });
});