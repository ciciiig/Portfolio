// When the user scrolls below home, show the navbar or hamburger is media query is active. Code below
const nav = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger-wrapper");
var prevScrollpos = window.pageYOffset;

function showAfterHome(elem) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < window.innerHeight) {
        elem.style.visibility = 'hidden';
        elem.style.opacity = 0;
        elem.style.transition = 'visibility 0s linear 600ms, opacity 600ms';
    } else {
        elem.style.top = "0";
        elem.style.visibility = 'visible';
        elem.style.opacity = 1;
        elem.style.transition = 'visibility 0s linear 0s, opacity 600ms';
    }
    prevScrollpos = currentScrollPos;
}
window.onscroll = function() {
    showAfterHome(nav);
    showAfterHome(hamburger);
  }
// When the user scrolls below home, show the navbar or hamburger is media query is active. Code above
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