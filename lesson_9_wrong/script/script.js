// const acordionTitleAll = document.querySelectorAll("[data-acordion-title]");

// v1 without collapce all
// acordionTitleAll.forEach(item => {

//     item.addEventListener("click", function(){
//         item.classList.toggle("active");
//         item.classList.toggle("activet");
//     })

// });

// function accordion(accordionsBloks) {
//   const acordionTitleAll = document.querySelectorAll(
//     accordionsBloks + " [data-acordion-title]");

//   acordionTitleAll.forEach(function (item) {
//     item.addEventListener("click", function () {
//       if (
//         item.classList.contains("active") &&
//         item.classList.contains("activet")
//       ) {
//         item.classList.remove("activet");
//         item.classList.remove("active");
//         return;
//       } else {
//         acordionTitleAll.forEach(function (i) {
//           i.classList.remove("activet");
//           i.classList.remove("active");
//         });
//         item.classList.add("activet");
//         item.classList.add("active");
//       }
//     });
//   });
// }

// accordion(".accordion1");

const acordionTitleAll = document.querySelectorAll(" [data-acordion-title]");

acordionTitleAll.forEach(function (item) {
  item.addEventListener("click", function () {
    let arrow = item.querySelector(".arrow");
    // console.log(arrow)

    if (item.classList.contains("active")) {
      item.classList.remove("activet");
      item.classList.remove("active");
      arrow.classList.remove("activea");
      return;
    } else {
      acordionTitleAll.forEach(function (i) {
        let arrow2 = i.querySelector(".arrow");
        // console.log(arrow2);

        i.classList.remove("activet");
        i.classList.remove("active");
        arrow2.classList.remove("activea");
      });

      item.classList.add("activet");
      item.classList.add("active");
      arrow.classList.add("activea");
    }
  });
});
