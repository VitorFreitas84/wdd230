document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById('meet-greet-banner');
    const closeButton = document.getElementById('close-banner');

    const today = new Date().getDay();

    if (today === 1 || today === 2 || today === 3) { // Monday, Tuesday, or Wednesday
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
