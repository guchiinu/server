var fs = require('fs');

var jsonObject = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

var labelObject = jsonObject.data.labels;
var dataObject = jsonObject.data.datasets[0].data; 

labelObject.push("hogehoge");
dataObject.push(11);

fs.writeFileSync('./data.json', JSON.stringify(jsonObject));

console.log(dataObject);
