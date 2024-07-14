export function popup() {


// popup_one_
// add pop

// const popbtn1 = document.querySelector("[data-popup-button='popup-1']");
// const popup = document.querySelector("#popup-1");
// const close = document.querySelector("[data-popup-close]");
// const popwin = document.querySelector("[data-popup-window]")

// popbtn1.addEventListener("click", function(){
//     popup.classList.add("activepop")
// });

// // close pop

// close.addEventListener("click", function(){
//     popup.classList.remove("activepop");
// });
// popup.addEventListener("click", function(){
//     popup.classList.remove("activepop");
// });
// popwin.addEventListener("click", function(event) {
//  event.stopPropagation();
// });

//several popups

const all_btn = document.querySelectorAll("[data-popup-button]");
const all_pop = document.querySelectorAll("[data-popup]");

// pop
all_btn.forEach(function (element) {
  element.addEventListener("click", function (event) {
    document
      .querySelector("#" + event.target.dataset.popupButton)
      .classList.add("activepop");
  });
});

// close
all_pop.forEach(function (element) {
  element
    .querySelector("[data-popup-close]")
    .addEventListener("click", function () {
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

  //   document.addEventListener("keydown", function (event) {
  //     if (event.key === "Escape") {
  //       element.classList.remove("activepop");
  //     }
  //   });
});

};