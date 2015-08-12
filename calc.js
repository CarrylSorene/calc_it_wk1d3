var calc = prompt('Please type B to use the Basic calculator or A for Advanced');
  console.log('calc', calc);

  if (calc === "B") {

var firstNum = prompt('choose the first number');
  console.log('firstNum', firstNum);

var op = prompt('choose an operation');
console.log('op', op);

var secondNum= prompt('choose the second number');
  console.log('secondNum', secondNum);

firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);

/*alert("Why is your console not open?");*/


if (op === "+") { 
  console.log(firstNum + secondNum);
}
else if (op === "-") {
  console.log(firstnNum - secondNum);

}
else if (op === "*") {
  console.log(firstNum * secondNum);
}

else if (op === "/") {
  console.log(firstNum / secondNum);
}

if (firstNum === NaN && secondNum === NaN) {
  alert("That is not a number. Please try again");
}
}

 else if (calc === 'A') {

var op = prompt('choose an operation');
console.log('op', op);

var Num= prompt('choose the number');
  console.log('Num', Num);
 }

 if (op === ) /*power*/ {

}
  else if 
    (op ===) /*sq root*/ {

  }
