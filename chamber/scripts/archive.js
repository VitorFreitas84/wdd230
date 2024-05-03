document.addEventListener('DOMContentLoaded', function() {
    const years = ['2024', '2023', '2022', '2021']; // Sample years
    const yearList = document.getElementById('year-list');

    years.forEach(year => {
        const li = document.createElement('li');
        li.textContent = year;
        li.addEventListener('click', function() {
            displayYearArchive(year);
        });
        yearList.appendChild(li);
    });
});

function displayYearArchive(year) {
    console.log('Displaying archives for', year);
    // Add AJAX call or API fetch to get archive data for selected year
    // Update the DOM with fetched data
}
