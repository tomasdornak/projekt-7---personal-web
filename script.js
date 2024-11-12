document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const linksContainer = document.querySelector('.links-container');

    hamburger.addEventListener('click', function() {
        linksContainer.style.display = linksContainer.style.display === 'flex' ? 'none' : 'flex';
    });
});



const image = document.getElementById('zoom-image');

document.addEventListener("DOMContentLoaded", function() {

  const images = document.querySelectorAll('.work-image');
  
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  
  images.forEach((image) => {
      image.addEventListener("click", function() {
          modal.style.display = "block"; 
          modalImg.src = this.src;  
          captionText.innerHTML = this.alt;  
      });
  });

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});