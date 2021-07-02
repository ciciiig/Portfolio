// When the user scrolls below home, show the navbar. Code below
const nav = document.getElementById("nav");
var prevScrollpos = window.pageYOffset;
nav.style.visibility = 'hidden';

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos + 300 < window.innerHeight) {
        nav.style.visibility = 'hidden';
        nav.style.opacity = 0;
        nav.style.transition = 'visibility 0s linear 600ms, opacity 600ms';
    } else {
        nav.style.top = "0";
        nav.style.visibility = 'visible';
        nav.style.opacity = 1;
        nav.style.transition = 'visibility 0s linear 0s, opacity 600ms';
    }
    prevScrollpos = currentScrollPos;
}
// When the user scrolls below home, show the navbar. Code above

// Toggle dark mode code below
const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    }
}

toggleSwitch.addEventListener('change', switchTheme)
// Toggle dark mode code above

// check local storage for theme color
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}