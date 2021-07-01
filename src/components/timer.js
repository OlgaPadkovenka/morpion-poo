export class Timer {
    btnStart;
    btnPause;
    btnResume;
    timer;
    date;
    intervalId;

    constructor() {
        this.btnStart = document.querySelector("#timerStart");
        this.btnPause = document.querySelector("#timerPause");
        this.btnResume = document.querySelector("#timerResume");

        this.timer = document.querySelector("#timerTime");
        this.date = new Date(0);

        this.intervalId = 0;

        this.btnStart.addEventListener("click", () => this.start());
        this.btnPause.addEventListener("click", () => this.pause());
        this.btnResume.addEventListener("click", () => this.resume());
    }

    disapearAppear = (disapear, appear) => {
        disapear.classList.replace("d-block", "d-none");
        appear.classList.replace("d-none", "d-block");
    }

   
    increment () {
        this.timer.innerText = this.date.toISOString().substr(14, 5);
        this.date.setSeconds(this.date.getSeconds() + 1);
    }

    start () {
        this.date.setTime(0);
        this.increment();
        this.disapearAppear(this.btnStart, this.btnPause);
        this.intervalId = setInterval(() => this.increment(), 1000);
    }


    pause () {
        this.disapearAppear(this.btnPause, this.btnResume);
        this.stop();
    }

    resume () {
        this.disapearAppear(this.btnResume, this.btnPause);
        this.intervalId = setInterval(() => this.increment(), 1000);
    }

    stop () {
        clearInterval(this.intervalId);
    }
}
