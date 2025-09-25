let text = "Hello World!";
let pattern = /hello/;

console.log(pattern.test(text));

let text2 = "My number is 01712345678";
let pattern2 = /\d{11}/;

console.log(pattern2.exec(text2));


let text3 = "2025 is current year";
let pattern3 = /2025/;

let newText = text3.replace(pattern3, "2026");
console.log(newText);