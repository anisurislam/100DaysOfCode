let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");
let toggleDarkMode = document.querySelector('.dark-mode-toggle .toggle-button-area');

// ------------------------------------------------
// ---------- Clock Animation Or Rotation ---------
// ------------------------------------------------
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // Calculating Angle
    let hourAngle = (hour * 30) + (minute * 0.5);
    let minuteAngle = (minute * 6) + (second * 0.1);
    let secondAngle = second * 6;

    // Rotating Hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    hourHand.style.transformOrigin = "bottom";
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    minuteHand.style.transformOrigin = "bottom";
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    secondHand.style.transformOrigin = "bottom";
}, 1000);

// ------------------------------------------------
// ---------- Dark And Light Mode Toggle ----------
// ------------------------------------------------
toggleDarkMode.addEventListener('click', () => {
    let toggleCircle = toggleDarkMode.querySelector('.outer-area .circle');
    // switching mode
    toggleCircle.classList.toggle("dark-active")

    // Adjusting Colors
    if (toggleCircle.classList.contains("dark-active")) {
        // In Dark Mode
        document.documentElement.style.setProperty("--primary-color", "#F6F5F2");
        document.documentElement.style.setProperty("--bg-color", "#17153B");
        document.documentElement.style.setProperty("--invert-filter-value", 1);
    } else {
        // In Light Mode
        document.documentElement.style.setProperty("--primary-color", "#2d3436");
        document.documentElement.style.setProperty("--bg-color", "#f5f6fa");
        document.documentElement.style.setProperty("--invert-filter-value", 0);
    }
})