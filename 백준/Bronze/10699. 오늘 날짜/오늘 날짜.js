let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let date = new Date();
let res=new Date(date.getTime()-(date.getTimezoneOffset()*60000)).toISOString().split('T');
console.log(res[0]);