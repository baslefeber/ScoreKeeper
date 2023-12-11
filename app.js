const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');

const p1Display =  document.querySelector('#p1Display');
const p2Display =  document.querySelector('#p2Display');

const playToSelect = document.querySelector('#playTo');

const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningscore = 5;
let isGameOver = false;

function resetzero() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

p1Btn.addEventListener('click', function() {
    if(!isGameOver){
        p1Score += 1;
        if (p1Score === winningscore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})

p2Btn.addEventListener('click', function() {
    if(!isGameOver){
        p2Score += 1;
        if (p2Score === winningscore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener('click', resetzero)

playToSelect.addEventListener('change', function() {
    winningscore = parseInt(this.value);
    resetzero();
})