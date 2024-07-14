// menu
const btn_nav = document.querySelector(".nav_btn");
const menu = document.querySelector(".navbar");
btn_nav.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// popups

const popupBtnAll = document.querySelectorAll("[data-popup-button]");

// add popup

popupBtnAll.forEach(function (element) {
  element.addEventListener("click", function (event) {
    let pop = document.querySelector("#" + event.target.dataset.popupButton);
    pop.classList.add("activepop");
  });
});

// close popup

const popAll = document.querySelectorAll("[data-popup]");

popAll.forEach(function (element) {
  element.querySelector(".popup__close").addEventListener("click", function () {
    element.classList.remove("activepop");
  });

  element
    .querySelector("[data-popup-window]")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  element.addEventListener("click", function () {
    element.classList.remove("activepop");
  });
});
