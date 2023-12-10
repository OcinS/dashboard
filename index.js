const OPEN = document.querySelector('.mdi-menu');
const EXIT = document.querySelector('.mdi-exit-to-app');

const SIDEBAR = document.querySelector('#sidebar');

OPEN.addEventListener("click", function() {
    SIDEBAR.style.zIndex = "1";
});

EXIT.addEventListener("click", function() {
    SIDEBAR.style.zIndex = "-1";
});