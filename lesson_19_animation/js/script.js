const areaAll = document.querySelectorAll(".area");

areaAll.forEach(function (item, index) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    console.log(`#item${index}`);

    if (index === 8 || index === 11 || index === 15 || index === 17) {
      document.querySelector(`#item${index}`).classList.toggle("display");

      if (document.querySelectorAll(".display").length > 0) {
        document.querySelector(".text_uk").classList.add("run");
      } else {
        document.querySelector(".text_uk").classList.remove("run");
      }
    }
  });
});
