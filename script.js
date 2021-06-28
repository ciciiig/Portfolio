// When the user scrolls below home, show the navbar.
const nav = document.getElementById("nav");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos+250 < window.innerHeight) {
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