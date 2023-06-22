let targetTime = new Date('06-23-2023 09:00 PM')

document.getElementById('set-countdown-btn').addEventListener('click', function () {
    const inputDate = document.getElementById('countdown-date').value;
    const inputTime = document.getElementById('countdown-time').value;
    targetTime = new Date(`${inputDate} ${inputTime}:00`);
    updateCountdown();
});

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentTime = new Date();
    const remainingTime = targetTime - currentTime;

    if (isNaN(remainingTime) || remainingTime < 0) {
        document.getElementById("days").value = '0';
        document.getElementById("hours").value = '0';
        document.getElementById("minutes").value = '0';
        document.getElementById("seconds").value = '0';
    } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}
updateCountdown();