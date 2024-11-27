const hamburger = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
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



const texts = document.querySelectorAll('.heading, .about-heading, .secondary-text, .second-paragraph, .klient, .about-paragraph, .feedback-input, .submit');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});

texts.forEach(text => observer.observe(text));

  



const images = document.querySelectorAll('.work-image, .about-image, .stars, .klient1');


const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            imageObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

images.forEach(image => imageObserver.observe(image));
