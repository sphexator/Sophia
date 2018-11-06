const testFolder = '../Services/Events/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  if(!fs.lstatSync(path + file).isDirectory())
  require(`../${file}`);
})