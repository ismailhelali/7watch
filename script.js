function updateClock() {
    // Get the current time
    const now = new Date();

    // Total minutes in the custom day
    const totalMinutesInDay = 1435;
    
    // Minutes since the start of the day
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    
    // Calculate custom time
    const customMinutes = minutesSinceMidnight % totalMinutesInDay;
    const customHour = Math.floor(customMinutes / 205);
    const customMinute = customMinutes % 205;

    // Format time as HH:MM
    const formattedTime = customHour.toString().padStart(2, '0') + ":" + customMinute.toString().padStart(2, '0');
    
    // Display the time
    document.getElementById("time").textContent = formattedTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately on load
updateClock();
