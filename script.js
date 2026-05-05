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

// Custom Audio Player Logic
const audio = document.getElementById('affirmationAudio');
const playBtn = document.getElementById('playBtn');
const progressWrapper = document.getElementById('progressWrapper');
const progressFill = document.getElementById('progressFill');

if (audio && playBtn) {
    // Toggle Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });

    // Update Progress Bar
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${percent}%`;
    });

    // Click to Seek
    progressWrapper.addEventListener('click', (e) => {
        const rect = progressWrapper.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
    });

    // Reset when audio ends
    audio.addEventListener('ended', () => {
        playBtn.textContent = '▶';
        progressFill.style.width = '0%';
    });
}
