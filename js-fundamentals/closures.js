// function numGenerator() {
//     var num = 1;
//     function checkNumber() {
//         console.log(num);
//     }
//     return checkNumber;
// }

// const myFunc = numGenerator();
// myFunc();

function calculate() {
    var num = 5;
    function sum() {
        let result = num + 10;
        return result;
    }
    return sum;
}

const myFunc = calculate();
myFunc;