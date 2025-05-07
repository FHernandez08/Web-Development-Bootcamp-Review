let score = 0;

const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const currentScore = document.querySelector('.currentValue');

const updateScore = () => {
    currentScore.innerHTML = `<p>Score: ${score}</p>`
};

updateScore();

addBtn.addEventListener('click', () => {
    score += 1;
    updateScore();
});

subtractBtn.addEventListener('click', () => {
    score -= 1;
    updateScore();
});
