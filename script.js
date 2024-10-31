document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const linksContainer = document.querySelector('.links-container');

    hamburger.addEventListener('click', function() {
        linksContainer.style.display = linksContainer.style.display === 'flex' ? 'none' : 'flex';
    });
});