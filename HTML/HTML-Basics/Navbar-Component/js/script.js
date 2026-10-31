const iconMenuHamburger = document.getElementById("menu-icon-hamburger");
const iconMenuCross = document.getElementById("menu-icon-cross");
const slidingMenu = document.getElementById("sliding-menu");
const menuOverlay = document.getElementById("menu-overlay");

iconMenuHamburger.addEventListener("click", function () {
    iconMenuHamburger.style.display = "none";
    slidingMenu.style.visibility = "visible";
    menuOverlay.style.visibility = "visible";
});

iconMenuCross.addEventListener("click", function () {
    iconMenuHamburger.style.display = "block";
    slidingMenu.style.visibility = "hidden";
    menuOverlay.style.visibility = "hidden";
});
