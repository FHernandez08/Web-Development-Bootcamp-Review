// callback functions
function displayScore(score) {
    let result = score;
    return `The final score: ${result}.`;
}

function finalResult(team1, myCallback) {
    let points = team1
    return myCallback(points);
}

console.log(finalResult(10, displayScore));