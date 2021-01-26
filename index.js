class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    start() {
        
        setInterval(() => {
            const currentTime = Date.now();
            const delta = this.targetDate - currentTime;
            this.updateTimerNumbers(delta);
        }, 1000);
    }



    updateTimerNumbers(time) {
    const dayRef = document.querySelector('[data-value = "days"]');
    const hourRef = document.querySelector('[data-value = "hours"]');
    const minRef = document.querySelector('[data-value = "mins"]');
    const secRef = document.querySelector('[data-value = "secs"]');
        
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    dayRef.textContent = `${days}`;
    hourRef.textContent =`${hours}`;
    minRef.textContent =`${mins}`;
    secRef.textContent = `${secs}`;
}

 pad(value) {
    return String(value).padStart(2, '0');
}
}


const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Mar 01, 2021'),
});

newTimer.start();