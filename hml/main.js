const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});
const chevronright = document.querySelector(".fa-chevron-right");
const chevronrleft = document.querySelector(".fa-chevron-left");
const caroussel = document.querySelector(".caroussel");
let index = 0;
const translateCarousel = () => {};

chevronright.addEventListener("click", () => {
    console.log("right");
});
chevronrleft.addEventListener("click", () => {
    console.log("left");

});
