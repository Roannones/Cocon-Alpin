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
    e.preventDefault();
    
    let existingMenu = sideMenuPrestation.querySelector('ul');
    
    if (existingMenu) {
        existingMenu.remove();
    } else {
        const prestations = [
            { text: 'Premier bain de votre bébé', href: 'LePremierBain.html' },
            { text: 'Bain enveloppé', href: 'LeBainEnveloppe.html' },
            { text: 'Baby massage', href: 'BabyMassage.html' },
            { text: 'The pack Cocon Alpin', href: 'ThePackCoconAlpin.html' },
            { text: 'Baby Spa', href: 'BabySpa.html' },
            { text: 'Baby Spa & Massage', href: 'BabySpaMassage.html' },
            { text: 'Pack 3 séances Baby Spa', href: 'Pack3SeancesBabySpa.html' },
            { text: 'Anniversaire party', href: 'UnAnniversairePasCommeLesAutres.html' }
        ];
        
        const menuPres = document.createElement("ul");
        
        prestations.forEach(presta => {
            const li = document.createElement('li');
            
            const link = document.createElement('a');
            link.textContent = presta.text;
            link.href = presta.href;
            
            // Stop event from bubbling to parent
            link.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent parent click handler
                // Link will navigate normally
            });
            
            link.addEventListener('mouseenter', () => {
                link.style.textDecoration = 'underline';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.textDecoration = 'none';
            });
            
            li.appendChild(link);
            menuPres.appendChild(li);
        });
        
        sideMenuPrestation.appendChild(menuPres);
    }
});

// underline prestation on footer
const foot2Links = document.querySelectorAll('.foot2 a');

// Add event listeners to each link
foot2Links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
    });
});