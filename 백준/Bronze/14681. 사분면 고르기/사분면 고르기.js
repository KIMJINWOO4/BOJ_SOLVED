const [n, m] = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

if (n > 0 && m > 0)
  console.log(1);
else if (n < 0 && m > 0)
  console.log(2);
else if (n < 0 && m < 0)
  console.log(3);
else if (n > 0 && m < 0)
  console.log(4);