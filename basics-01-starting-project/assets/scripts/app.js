const defaulResult = 0;
let currentResult = defaulResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDesciption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesciption); //from vendor file
}

function logRecords(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber
  ) {
    return;
  }

  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBTRACT" ||
  //   calculationType === "MULITPLY" ||
  //   calculationType === 'DIVIDE'
  // ) {
    if (calculationType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }
  
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    logRecords(calculationType, initialResult, enteredNumber, currentResult);
  
  }

  // }

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
