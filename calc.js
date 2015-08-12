var calc = prompt('Please type B to use the Basic calculator or A for Advanced');
  console.log('calc', calc);

  if ( (calc === "B") || (calc === "b") ) {
    console.log('Okay')
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
         var answer = (firstNum + secondNum);
         alert("The answer is " + answer);
      }

      else if (op === "-") {
        console.log(firstNum - secondNum);
        var answer = (firstNum - secondNum);
        alert("The answer is " + answer);
      }

      else if (op === "*") {
        console.log(firstNum * secondNum);
        var answer = (firstNum * secondNum);
        alert("The answer is " + answer);
      }

      else if (op === "/") {
        console.log(firstNum / secondNum);
        var answer = (firstNum / secondNum);
        alert("The answer is " + answer);
      }

      else if (firstNum === NaN && secondNum === NaN) {
        alert("That is not a number. Please try again");
      }
  }

  if ((calc === "A") || (calc === "a")) {
    var op = prompt('Please type P for power or S for square root');
    console.log('op', op);
      if ((op === "P") || (op === "p"))  {
        var firstNum = prompt('choose the first number');
        console.log('firstNum', firstNum);
  
        var secondNum = prompt('choose the second number');
        console.log('secondNum', secondNum);

        var answer = Math.pow(firstNum, secondNum);
        alert("The answer is " + answer);
  }
}

    else if 
      ((op === "S") || (op === "s")) {
  
        var Num = prompt('choose the number');
        console.log('Num', Num);

        var answer = Math.sqrt(Num);
        alert("The answer is " + answer);
  }
