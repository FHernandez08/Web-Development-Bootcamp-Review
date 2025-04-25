const fs = require("fs");
const path = require("path");

const data = {
  name: "Fidel Hernandez",
  age: 25,
  birthCity: "Houston",
};

let preparedData = JSON.stringify(data);

const filePath = path.join(__dirname, "sample.txt");

fs.writeFile(filePath, preparedData, (err) => {
  if (err) {
    console.error("The file didn't process due to: ".err);
  } else {
    console.log("File written successfully to:", filePath);
  }
});

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error("It can't read the file due to:", err);
  } else {
    console.log("This is the data in the file:", data);
  }
});
