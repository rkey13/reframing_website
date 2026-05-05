// Function for the Audio Sample button
function toggleAudio() {
    alert("Close your eyes and breathe. Imagine a soft light surrounding your younger self. You are safe, you are seen, and you are enough.");
    console.log("Audio simulation triggered.");
}

// Function for the Postcard Reminder
document.getElementById('remindBtn').addEventListener('click', function() {
    const email = prompt("Enter your email if you'd like a digital nudge to reflect today:");
    if (email) {
        alert("Thank you. Take a deep breath. Your reflection journey has begun.");
    }
});

// Subtle fade-in effect on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 0.1;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = 1;
        }
    });
});
