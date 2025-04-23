const fs = require("fs");

const readFile = fs.createReadStream('C:/Users/fh/OneDrive/Documentos/Coding/Web-Development-Bootcamp-Review/file-system/practice/streams/data.json', 'utf-8');
readFile.on('data', (data) => {
    console.log(`Here's all the data from the file: ${data}`);
    // for json data: jsonData += chunk
});

readFile.on('end', () => {
    console.log("There is no more content to be read on the file.");
    // for json data: use a try-catch block where in the try parse the JSON data (jsonData) the either console log it or throw and error
});

readFile.on('error', (err) => {
    console.log("There happens to be an error preventing the file to be read:", err);
});