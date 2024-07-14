let out_1 = document.querySelector(".out_1");
let out_2 = document.querySelector(".out_2");
let out_3 = document.querySelector(".out_3");

// ____________________________1
function check1() {
  let entered = document.querySelector(".inp_1").value;

  function f1(entered) {
    return entered.length;
  }
  out_1.innerHTML = `Entered text has ${f1(entered)} symbols`;
}

// ____________________________2
function check2() {
  let num1 = parseFloat(document.querySelector(".inp_2__1").value);
  let num2 = parseFloat(document.querySelector(".inp_2__2").value);

  let f2 = function (num1, num2) {
    if (num1 >= num2) {
      return `Num1: ${num1} more or equal Num2: ${num2}`;
    } else {
      return num2;
    }
  };
  out_2.innerHTML = f2(num1, num2);
}

// ____________________________3
function check3() {
  let num3 = +document.querySelector(".inp_3").value;

  let f3 = (num3) =>
    num3 == ""
      ? `Enter the number`
      : num3 % 2 === 0
      ? `the number is ${true}`
      : false;
  out_3.innerHTML = f3(num3);
}

// _______________________First______
// let userName = "Vitalii";
// function f1(userName) {
// return userName.length;
// };
// out_1.innerHTML = f1(userName);
