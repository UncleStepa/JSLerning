// function showFirstMessage(text) {
//     alert(text);
//     let = num = 20;
// }

// showFirstMessage("Hello World");

// let calc = function(a, b) {
//     return (a + b);
// }

let calc = (a, b) => a + b;

console.log(calc(3, 4));
console.log(calc(5, 5));

function retVar() {
    let num =50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));