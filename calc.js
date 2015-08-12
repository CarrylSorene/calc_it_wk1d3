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
  /*alert("firstNum + secondNum");*/
  }

  else if (op === "-") {
  console.log(firstNum - secondNum);
  /*alert("firstNum - secondNum")*/
  }

  else if (op === "*") {
  console.log(firstNum * secondNum);
  /*alert("firstNum * secondNum");*/
  }

  else if (op === "/") {
  console.log(firstNum / secondNum);
  /*alert(firstNum / secondNum);*/
  }

  if (firstNum === NaN && secondNum === NaN) {
  alert("That is not a number. Please try again");
  }
}

  else if (calc === 'A') {

var op = prompt('Please type power or square root');
console.log('op', op);

  if (op === "power")  {

  var firstNum = prompt('choose the first number');
  console.log('firstNum', firstNum);
  
  var secondNum= prompt('choose the second number');
  console.log('secondNum', secondNum);
}

  if (secondNum === 2) {
  Math.pow(firstNum * (firstNum * firstNum));
}

  else if (secondNum === 3) {
    Math.pow(firstNum * (firstNum * firstNum * firstNum))
  }
}

  else if 
    (op === "square root") {
  
var Num= prompt('choose the number');
console.log('Num', Num);

  Math.sqrt(Num / Num);
}
