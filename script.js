function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const isAm = hours < 12;

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Update the clock
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    document.getElementById("period").textContent = isAm ? "AM" : "PM";
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
