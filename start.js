

let classObject;
class Game {

    turn = 'O';
    playerTurn = false;
    boxes;
    constructor() {
        this.initializeBoard();
        classObject = this;
    }

    resetBoard() {
        for(let i = 0; i < classObject.boxes.length; i++){
            const box = classObject.boxes[i];
            box.textContent = '';
        }
    }

    initializeBoard(){
        this.boxes = document.getElementsByClassName('box');   
        for(let i = 0 ; i < this.boxes.length; i++){
            const box = this.boxes[i];
            box.addEventListener('click', this.callFunction);
        }
        const playAgain = document.getElementById('replay');
        playAgain.addEventListener('click', this.resetBoard);
    }

    checkWinCondition(turn) {

        // ROWS
        if(this.boxes[0].textContent == turn && this.boxes[1].textContent == turn && this.boxes[2].textContent == turn) {alert('Winner');
    this.resetBoard();};
        if(this.boxes[3].textContent == turn && this.boxes[4].textContent == turn && this.boxes[5].textContent == turn) alert('Winner');
        if(this.boxes[6].textContent == turn && this.boxes[7].textContent == turn && this.boxes[8].textContent == turn) alert('Winner');

        // COLUMNS 
        if(this.boxes[0].textContent == turn && this.boxes[3].textContent == turn && this.boxes[6].textContent == turn) alert('Winner');
        if(this.boxes[1].textContent == turn && this.boxes[4].textContent == turn && this.boxes[7].textContent == turn) alert('Winner');
        if(this.boxes[2].textContent == turn && this.boxes[5].textContent == turn && this.boxes[8].textContent == turn) alert('Winner');

        // DIAGONAL AND ANTI DIAGONAL
        if(this.boxes[0].textContent == turn && this.boxes[4].textContent == turn && this.boxes[8].textContent == turn) alert('Winner');
        if(this.boxes[2].textContent == turn && this.boxes[4].textContent == turn && this.boxes[6].textContent == turn) alert('Winner');

    }

    callFunction = (e) => {
        const div = e.target;

        if(div.textContent == ''){
            if (!this.playerTurn) this.turn = 'O';
            else this.turn = 'X';

            div.textContent = this.turn;
            this.playerTurn = !this.playerTurn;
            this.checkWinCondition(this.turn);
        }
    }

}

window.addEventListener('DOMContentLoaded', function() {
    new Game();
})