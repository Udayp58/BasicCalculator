const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//To get number from input field
function getUserInput() {
  return parseInt(userInput.value);
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
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult += enteredNumber;
  writeResult("+", nbumberBeforeCal, enteredNumber);
  writeLog('ADD',nbumberBeforeCal, enteredNumber,  currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult -= enteredNumber;
  writeResult("-", nbumberBeforeCal, enteredNumber);
  writeLog('SUBTRACT',nbumberBeforeCal, enteredNumber, currentResult);
}

function multiple() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult *= enteredNumber;
  writeResult("*", nbumberBeforeCal, enteredNumber);
  writeLog('MULTIPLY',nbumberBeforeCal, enteredNumber,  currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult /= enteredNumber;
  writeResult("/", nbumberBeforeCal, enteredNumber);
  writeLog('DIVIDE',nbumberBeforeCal, enteredNumber,  currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
