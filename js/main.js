/**
 * File primary-navigation.js.
 *
 * Required to open and close the primary menu.
 */
const docBody = document.body,
hamburger = document.querySelector('.site-menu-button'),
menuIcon = document.querySelector('.fa-bars'),
menuWrapper = document.getElementById('site-menu');

const toggleMenu = () => {
    hamburger.onclick = () => {
        if (hamburger.getAttribute('aria-expanded') === 'false') {
            hamburger.setAttribute('aria-expanded', 'true');
            hamburger.setAttribute('aria-label', 'Close main menu');
            // menuIcon.classList.toggle('fa-bars');
            // menuIcon.classList.toggle('fa-xmark');
            docBody.classList.toggle('show-menu');
        } else {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open main menu');
            // menuIcon.classList.toggle('fa-bars');
            // menuIcon.classList.toggle('fa-xmark');
            docBody.classList.toggle('show-menu');
        }
    }
}

toggleMenu();
