const track = document.querySelector(".track");
const images = document.querySelectorAll(".track img");
const nextBtn = document.querySelector("#next");

let index = 0;
const imageWidth = 200;
const visibleImages = 3;
const maxIndex = images.length - visibleImages;

nextBtn.addEventListener("click", () => {
    console.log("1+");
    if (index < maxIndex) {
        index++;
    } else {
        index = 0; // reset au début
    }

    track.style.transform = `translateX(-${index * imageWidth}px)`;
});