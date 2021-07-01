import { Timer } from "./timer";
import { Score } from "./score";
import { Modal } from "./modal";

export class Gride {
    cells;
    winnerList;
    markList;
    timeoutId;
    timer;
    score;
    index;
    mark;
    pause;
    figures;
    player;

    // foo = () => {
    //     this.doStuff();
    // }

    constructor() {

        this.timer = new Timer();
        this.btnStart = document.querySelector("#timerStart");
        this.btnPause = document.querySelector("#timerPause");
        this.btnResume = document.querySelector("#timerResume");

        this.score = new Score();

        this.cells = document.querySelectorAll(".case");

        this.winnerList = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        this.markList = [];
        this.pause = true;
        this.figures = ['cross', 'circle'];
       
        this.btnStart.addEventListener("click", () => this.startGame());
        this.btnPause.addEventListener("click", () => this.pauseGame());
        this.btnResume.addEventListener("click", () => this.resumeGame());
        // this.btnStart.addEventListener("click", () => this.initGame());
    }

    startGame() {
        this.cells.forEach((cell, idx) => {
            cell.addEventListener("click", () => this.markCircle(idx));
        });
        this.pause = false;
    }

    pauseGame() {
        this.pause = true;
    }

    resumeGame() {
        this.pause = false;
    }

    isWinner(player) {
        const playerCells = this.markList.filter((_, i) => i % 2 === player);
        for (const comb of this.winnerList) {
            const k = playerCells.reduce((k, x) => k + comb.includes(x), 0)
            if (k === 3) {
                return true;
            }
        }
        return false;
    }

    markCircle(idx) {
        if (this.pause) return;
        const classList = this.cells[idx].classList;
        if (classList.contains(this.figures[0]) || classList.contains(this.figures[1])) return;
        this.cells[idx].classList.add(this.figures[0]);
        this.markList.push(idx);
        if (this.isWinner(0)) {
            console.log('You win!');
            this.pause = true;
            return;
        }
        const freeCells = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter((x) => !this.markList.includes(x))
        const compMove = freeCells[Math.floor(Math.random() * freeCells.length)];
        this.markList.push(compMove);
        this.cells[compMove].classList.add(this.figures[1]);
        if (this.isWinner(1)) {
            console.log('You lose!');
            this.pause = true;
        }
    }


    // startGame() {
    //     this.cells.forEach((cell) => {
    //         cell.addEventListener("click", () => this.target(cell));
    //         //cell = this.cells.indexOf(cell); 
    //         console.log("Start");
    //     });
    // }

    // pauseGame() {
    //     this.cells.forEach((cell) => {
    //         clearTimeout(this.timeoutId);
    //         cell.removeEventListener("click", () => this.target(cell));
    //         console.log("Pause");
    //     });
    // };

    // markCircle(e) {
    //     if (this.mark(e.target, "circle")) {
    //         this.pauseGame();
    //         this.timeoutId = setTimeout(() => this.markCross(), 2000);
    //     };
    // }


    // markCross() {
    //     this.timeoutId = null;
    //     console.log("CPU mark");
    //     let freeCase = [];

    //     for (let i = 0; i < 9; i++) {
    //         if (!this.markList[i]) {
    //             freeCase.push(i);
    //         }
    //     }
    //     const index = freeCase[Math.round(Math.random() * (freeCase.length - 1))];

    //     if (0 !== index && !index) {
    //         this.startGame();
    //     } else if (this.mark(this.cells[index], "cross")) {
    //         this.resumeGame();
    //     };
    // };

    // //fonction qui peut servir pour deux
    // mark(cell, mark) {
    //     const index = parseInt(cell.id.substr(4));
    //     if (this.markList[index]) {
    //         //j'ai pas marqué, ca s'est arrêté.
    //         return false;
    //     }

    //     cell.classList.add(this.mark);
    //     this.markList[index] = this.mark;

    //     // mettre 5 quand il y aura l'ordi
    //     if (5 > this.markList.length || !this.hasWin(this.mark)) {
    //         return true;
    //         //j'ai marqué et j'ai pas gagné 
    //     }
    //     this.stopGame();
    //     "circle" === mark ? this.incrementPlayer() : this.incrementCPU();
    //     return false;
    // };

    // stopGame () {
    //     stop();
    //     disapearAppear(btnPause, btnStart);
    //     pauseGame();
    //     popUpWin();
    // };

    // hasWin (mark) {
    //     for (const win of this.winnerList) {
    //         if (mark === this.markList[win[0]] &&
    //             mark === this.markList[win[1]] &&
    //             mark === this.markList[win[2]]
    //         ) {
    //             console.log("Vous avez gagné!");
    //             console.log();
    //             //pop up win
    //             //popUpWin();

    //             return true;
    //         }
    //     }
    //     //console.log("je vérifie la victoire");
    //     return false;
    // }

    // startGame() {
    //     this.cells.forEach((cell) => {
    //         cell.addEventListener("click", () => markCircle());
    //     });
    // };

    // //desable
    // pauseGame() {
    //     this.cells.forEach((cell) => {
    //         clearTimeout(this.timeoutId);
    //         cell.removeEventListener("click", () => markCircle());
    //     });
    // };

    // //enable
    // resumeGame() {
    //     if (this.timeoutId) {
    //         this.markCross();
    //     }
    //     this.cells.forEach((cell) => {
    //         cell.addEventListener("click", () => markCircle());
    //     });
    // };

    // initGame() {
    //     this.markList.splice(0);
    //     this.cells.forEach((cell) => {
    //         cell.classList.remove("circle", "cross");
    //     });
    //     this.resumeGame();
    // };

}



