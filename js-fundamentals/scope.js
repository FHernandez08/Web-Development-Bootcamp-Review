// global scope - universal variables
let a = 4;

// local scope - varibles inside a function
function score() {
    let b = 5;
    console.log(b)

    // block scope - variables inside conditional loops
    if (true) {
        let c = 6;
        console.log(c)
    }
}

// lexical scope - variables that are declared by a function
    function secondFunc() {
        console.log(a);
    }