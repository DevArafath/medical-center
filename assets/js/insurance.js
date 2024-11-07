// Footer Image Change Based on Time of the Day
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    const hour = new Date().getHours();

    // Apply 'morning' background if between 6 AM and 6 PM, else apply 'night'
    if (hour >= 6 && hour < 18) {
        footer.classList.add("footer-morning");
    } else {
        footer.classList.remove("footer-morning");
    }
});