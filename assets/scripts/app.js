const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//To get number from input field
function getUserInput() {
  return parseInt(userInput.value);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !==  "DIVIDE" ||
    !enteredNumber
  ){
    return;
  }
  const nbumberBeforeCal = currentResult;
  let methodOfOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    methodOfOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    methodOfOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    methodOfOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    methodOfOperator = "/";
  }
  writeResult(methodOfOperator, nbumberBeforeCal, enteredNumber);
  writeLog(calculationType, nbumberBeforeCal, enteredNumber, currentResult);
}

function writeResult(operator, nbumberBeforeCal, calNumber) {
  const calDiscription = `${nbumberBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDiscription); // from vendor.js
}

function writeLog(
  operatorIdentifier,
  previousResult,
  enteredNumber,
  finalResult
) {
  const logEntry = {
    operator: operatorIdentifier,
    userInput: enteredNumber,
    previousResult: previousResult,
    result: finalResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

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
