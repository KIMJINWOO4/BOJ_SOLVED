let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < Number(input[0]); i += 1) {
  switch (input[i + 1]){
    case 'Algorithm':
      console.log('204');
      break;
      case 'DataAnalysis':
      console.log('207');
      break;
      case 'ArtificialIntelligence':
      console.log('302');
      break;
      case 'CyberSecurity':
      console.log('B101');
      break;
      case 'Network':
      console.log('303');
      break;
      case 'Startup':
      console.log('501');
      break;
    default:
      console.log('105');
      break;
  }
}