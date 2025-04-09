const fs = require('fs');
const { json } = require('stream/consumers');

// writing JSON file
let user = {
    id: 1,
    completeName: "Fidel Hernandez",
    age: 25
}

const data = JSON.stringify(user);

fs.writeFile('practice/read-write-json/written-file.txt', data, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Information added to file successfully!")
    }
});

fs.readFile('practice/read-write-json/written-file.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        const user_data = JSON.parse(data);
        console.log(user_data);
    }
})