const track = document.querySelector(".track");
const images = document.querySelectorAll(".track img");
const imageWidth = images[0].getBoundingClientRect().width;
const nextBtn = document.querySelector("#next");


let index = 0;
const visibleImages = 3;
const maxIndex = images.length - visibleImages;

// Drag variables
let isDragging = false;
let startPos = 0;
let startPosY = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// Function to move the carousel to a specific index
function moveToIndex(newIndex) {
    index = newIndex;
    currentTranslate = -index * imageWidth;
    prevTranslate = currentTranslate;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// Button click handler
nextBtn.addEventListener("click", () => {
    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    moveToIndex(index);
});

// Get position from mouse or touch event
function getPositionX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

function getPositionY(event) {
    return event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;
}

// Start dragging (mouse and touch)
function dragStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    startPosY = getPositionY(e);
    track.style.cursor = "grabbing";
    track.style.transition = "none";
}

// While dragging (mouse and touch)
function dragMove(e) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(e);
    const currentPositionY = getPositionY(e);
    const diff = currentPosition - startPos;
    const diffY = currentPositionY - startPosY;
    
    // Check if horizontal movement is greater than vertical
    if (Math.abs(diff) > Math.abs(diffY)) {
        // Prevent page scroll when swiping horizontally
        e.preventDefault();
    }
    
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// End dragging (mouse and touch)
function dragEnd(e) {
    isDragging = false;
    track.style.cursor = "grab";
    track.style.transition = "transform 0.3s ease";
    
    const movedBy = currentTranslate - prevTranslate;
    
    // If dragged more than 100px, move to next/prev image
    if (movedBy < -100 && index < maxIndex) {
        index++;
    } else if (movedBy > 100 && index > 0) {
        index--;
    }
    
    moveToIndex(index);
}

// Mouse events
track.addEventListener("mousedown", dragStart);
track.addEventListener("mousemove", dragMove);
track.addEventListener("mouseup", dragEnd);
track.addEventListener("mouseleave", () => {
    if (isDragging) {
        dragEnd();
    }
});

// Touch events for mobile (with passive: false to allow preventDefault)
track.addEventListener("touchstart", dragStart, { passive: false });
track.addEventListener("touchmove", dragMove, { passive: false });
track.addEventListener("touchend", dragEnd);

// Set initial cursor style
track.style.cursor = "grab";

// Prevent default drag behavior on images
images.forEach((image) => {
    image.addEventListener("dragstart", (e) => e.preventDefault());
});



const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const sideMenuSection = document.querySelectorAll('#sideMenu .Section');
const sideMenuSectionAll = document.querySelectorAll('#sideMenu a');

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

// side menu section to leave when click and underline 
// ( expect prestation where different action)
sideMenuSection.forEach(section => {
    section.addEventListener('click', closeMenu);

    section.addEventListener('mouseenter', () => {
        section.style.textDecoration = 'underline';
    });
    section.addEventListener('mouseleave', () => {
        section.style.textDecoration = 'none';
    });
});

// for side menu presetation when mouse enter all prestation appear under it
const sideMenuPrestation = document.getElementById('sideMenuPrestation');
const prestationLink = sideMenuPrestation.querySelector('a');

prestationLink.addEventListener('mouseenter', () => {
    prestationLink.style.textDecoration = 'underline';
});
prestationLink.addEventListener('mouseleave', () => {
    prestationLink.style.textDecoration = 'none';
});

sideMenuPrestation.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from navigating
    
    let existingMenu = sideMenuPrestation.querySelector('ul');
    
    if (existingMenu) {
        existingMenu.remove();
    } else {
        const prestations = ['Prestation 1', 'Prestation 2', 'Prestation 3', 'Prestation 4'];
        const menuPres = document.createElement("ul");
        
        prestations.forEach(presta => {
            const li = document.createElement('li');
            li.textContent = presta;
            li.style.cursor = 'pointer'; // To have pointer also on presta

            li.addEventListener('mouseenter', () => {
                li.style.textDecoration = 'underline';
            });
            
            li.addEventListener('mouseleave', () => {
                li.style.textDecoration = 'none';
            });
            
            menuPres.appendChild(li);
        });
        
        sideMenuPrestation.appendChild(menuPres);
    }
});