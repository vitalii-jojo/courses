const animation = document.querySelector(".spinner");

animation.addEventListener("click", function () {
  if (animation.style.animationPlayState != "running") {
    animation.style.animationPlayState = "running";
    return;
  } else {
    animation.style.animationPlayState = "paused";
  }
});

// ______

const cloud = document.querySelector(".cloud_w");

cloud.addEventListener("click", function () {
  if (cloud.style.animationPlayState != "running") {
    cloud.style.animationPlayState = "running";
    return;
  } else {
    cloud.style.animationPlayState = "paused";
  }
});

// ______

const earth = document.querySelector(".earth_w");

earth.addEventListener("click", function () {
  if (earth.style.animationPlayState != "running") {
    earth.style.animationPlayState = "running";
    return;
  } else {
    earth.style.animationPlayState = "paused";
  }
});
// ______

// const rocket = document.querySelector(".rocket_w");

// rocket.addEventListener("mouseover", function () {
//   rocket.style.animationPlayState = "running";
// });
// rocket.addEventListener("mouseout", function () {
//   rocket.style.animationPlayState = "paused";
// });
