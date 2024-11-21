feather.replace();
function toggleMusic() {
    const music = document.getElementById("music");
    const image = document.querySelector(".music-image");
    const icon = document.getElementById("music-icon");

    // Check if the music is paused
    if (music.paused) {
        music.play().catch(error => console.log("Audio error:", error));
        image.classList.add("rotate-image", "echo-effect"); // Add animation classes
        icon.setAttribute("data-feather", "pause");  // Change icon to pause
    } else {
        music.pause();
        image.classList.remove("rotate-image", "echo-effect"); // Remove animation classes
        icon.setAttribute("data-feather", "play");  // Change icon to play
    }

    feather.replace();  // Replaces the icon each time it changes
    // Pastikan musik terus berputar saat selesai
    music.addEventListener("ended", () => {
        music.currentTime = 0; // Reset waktu ke awal
        music.play(); // Putar ulang
    });
}

document.querySelector('.more').addEventListener('click', (e) => {
    e.preventDefault();

    // Cari elemen main-contain
    const target = document.querySelector('.main-contain');

    // Scroll ke elemen dengan offset 20px
    window.scrollTo({
        top: target.offsetTop - 65, // Mengurangi 20px untuk memberi jarak
        behavior: 'smooth', // Animasi scroll yang halus
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class to trigger transition
            observer.unobserve(entry.target); // Optional: Stop observing after it becomes visible
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is in view
});

// Observe each section that we want to apply the transition to
document.querySelectorAll('.main-contain, .gbout, .gpic, .main-content1, .mbout, .mpic, .main-content2, .hbout, .hpic').forEach((element) => {
    observer.observe(element);
});






