// alert();
let myString = "Hello";
let myInt = 50;
let myBool = false;

let myIntArray = [1, 2, 3, 4, 5];
let myStrArray = ["Pizza", "Tacos", "Chinese", "CCC", "Bagels"];

let myMixedArray = ["Tacos", 3, "HotDog", 6.13, true];

console.log(myIntArray);

myIntArray[0] = 98;
myIntArray[2] = false;
myIntArray[4] = "Arrays are cool";

console.log(myIntArray);

let twoDeeArray = [
    ["Kenneth", "Martinez", 3],
    ["Jacob", "Jacoozie", 5],
    ["Jesse", "Lamzon", 5]
];

console.log(twoDeeArray);
console.log(twoDeeArray[0][0]);
console.log(twoDeeArray[1][1]);

const items = [[[]]];

items[0][0][0] = 5;

console.log(items);

let injectHere = document.getElementById("injectHere");
let btnShow = document.getElementById("btnShow");

btnShow.addEventListener("click", function(e) {
    injectHere.innerText = twoDeeArray[2][0];
});