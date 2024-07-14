

export function mobileMenu() {
const btn = document.querySelector(".menu_btn");
const menu = document.querySelector(".landing_nav");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    menu.classList.remove("active");
  }
});
}