

const dayRef = document.querySelector('[data-value = "days"]');
const hourRef = document.querySelector('[data-value = "hours"]');
const minRef = document.querySelector('[data-value = "mins"]');
const secRef = document.querySelector('[data-value = "secs"]');

const date = new Date("Mar 01, 2021");

const timer = {
    start() {
        const date = new Date("Mar 01, 2021");

        setInterval(() => {
            const currentTime = Date.now();
            const delta = date.getTime() - currentTime;
            updateTimerNumbers(delta);
        }, 1000);
    }}

timer.start();

function updateTimerNumbers(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    dayRef.textContent = `${days}`;
    hourRef.textContent =`${hours}`;
    minRef.textContent =`${mins}`;
    secRef.textContent = `${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}


new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
});