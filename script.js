const track = document.querySelector(".track");
const images = document.querySelectorAll(".track img");
const imageWidth = images[0].getBoundingClientRect().width;
const nextBtn = document.querySelector("#next");

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

let index = 0;
/*const imageWidth = 450;*/
const visibleImages = 3;
const maxIndex = images.length - visibleImages;

nextBtn.addEventListener("click", () => {

    if (index < maxIndex) {
        index++;
    } else {
        index = 0; // reset au début
    }

    track.style.transform = `translateX(-${index * imageWidth}px)`;
});


menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('open');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
}