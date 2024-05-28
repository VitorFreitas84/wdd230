// Last modified
document.getElementById("lastModified").innerHTML = document.lastModified;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});