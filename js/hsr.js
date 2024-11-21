feather.replace();
const searchInput = document.getElementById('searchInput');
const characterContainer = document.getElementById('characterContainer');
const charaBoxes = document.querySelectorAll('.chara-box');

// Event listener untuk input pencarian
searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase(); // Ambil input dan ubah ke huruf kecil

    charaBoxes.forEach(box => {
        const charaName = box.querySelector('p').textContent.toLowerCase(); // Ambil nama karakter

        // Tampilkan atau sembunyikan karakter berdasarkan pencarian
        if (charaName.includes(searchQuery)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});
