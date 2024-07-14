// accordion
const btnAll = document.querySelectorAll("[data-acc-btn]");

btnAll.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");

      return;
    } else {
      btnAll.forEach(function (i) {
        i.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});
// shadow
const shadowAll = document.querySelectorAll(".accordion__item");

shadowAll.forEach(function (list) {
  list.addEventListener("click", function () {
    if (list.classList.contains("actives")) {
      list.classList.remove("actives");
      return;
    } else {
      list.classList.add("actives");
    }
  });
});

// tabs

const tabsAll = document.querySelectorAll("[data-tab]");
const contAll = document.querySelectorAll("[data-tab-content]");

tabsAll.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      return;
    } else {
      tabsAll.forEach(function (i) {
        i.classList.remove("active");
      });
      item.classList.add("active");

      contAll.forEach(function (cont) {
        cont.classList.remove("active");
      });

      document.querySelector("#" + item.dataset.tab).classList.add("active");
    }
  });
});
