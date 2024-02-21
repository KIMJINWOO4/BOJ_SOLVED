let now = new Date();
let utcYear = now.getUTCFullYear();
let utcMonth = String(now.getUTCMonth() + 1).padStart(2, '0');
let utcDate = String(now.getUTCDate()).padStart(2, '0');

console.log(utcYear);
console.log(utcMonth);
console.log(utcDate);
