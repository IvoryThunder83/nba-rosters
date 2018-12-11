let csvToJson = require('convert-csv-to-json');
 
let fileInputName = './LALakers.csv'; 
let fileOutputName = 'LALakers.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);