function updateClock() {

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Digital
    document.getElementById('time').textContent =
        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    document.getElementById('date').textContent =
        now.toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric' });

    // Analog rotation
    const hourDeg = (h % 12) * 30 + m * 0.5;
    const minDeg = m * 6;
    const secDeg = s * 6;

    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Theme toggle
const btn = document.getElementById('toggleTheme');

btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
});

// Random color change every second (SYNCED with clock)
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Modify updateClock to include color change
function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Digital
    document.getElementById('time').textContent =
        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    document.getElementById('date').textContent =
        now.toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric' });

    // Analog rotation
    const hourDeg = (h % 12) * 30 + m * 0.5;
    const minDeg = m * 6;
    const secDeg = s * 6;

    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;

    // CHANGE COLOR EVERY SECOND
    const color1 = randomColor();
    const color2 = randomColor();
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

// Run once per second
setInterval(updateClock, 1000);
updateClock();