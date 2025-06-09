const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];

const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.dataset.large || img.src;
  });
});

closeBtn.onclick = function () {
  lightbox.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == lightbox) {
    lightbox.style.display = 'none';
  }
};
