function numGenerator() {
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    return checkNumber;
}

const myFunc = numGenerator();
console.log(myFunc);