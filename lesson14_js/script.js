// 2
let arr1 = ["Kharkiv", 27, true, "some text", "Vitalii"];
let arr2 = ["Volvo", "Kia", "Audi", "Mazda", "Subaru"];

// 2.2
console.log("2.1");

let line = "";
for (let i = 0; i < arr1.length; i++) {
  line += arr1[i] + " ";
  // console.log(arr1);
  // if (i=1) break;
}
console.log(line);

// 2.3
console.log("2.2");

let info = "";
for (let i = 0; i < arr2.length; i++) {
  info += `Індекс масиву ${i} - елемент масиву: ${arr2[i]} `;
}
console.log(info);

// 2.4
console.log("2.4");

let next = "";
arr1.forEach((item, index) => {
  next += `Елемент масиву: ${item} - індекс масиву: ${index}; `;
});
console.log(next);

// 2.5
console.log("2.5");

let last = "";
arr1.forEach((item, index) => {
  last += `Елемент масиву: ${item} - індекс масиву: ${index}; `;
});
console.log(last);
