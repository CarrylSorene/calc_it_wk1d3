var op = prompt('choose an operation');
console.log('op', op);

var num = prompt('choose a number');

num = parseFloat(num);

console.log('num', num);

/*alert("Why is your console not open?");*/


if (op === "+") { 
  console.log(num + num);
}
else if (op === "-") {
  console.log(num - num);

}
else if (op === "*") {
  console.log(num * num);
}

else if (op === "/") {
  console.log(num / num);
}

if (num === NaN) {
  alert("That is not a number. Please try again");
}
