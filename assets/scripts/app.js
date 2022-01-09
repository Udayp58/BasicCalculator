const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//To get number from input field
function getUserInputOutput() {
  return parseInt(userInput.value);
}

function writeResult(operator, nbumberBeforeCal, calNumber) {
  const calDiscription = `${nbumberBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDiscription); // from vendor.js
}

function add() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult += enteredNumber;
  writeResult("+", nbumberBeforeCal, enteredNumber);
  const logEntry = {
    operator: "ADD",
    userInput: enteredNumber,
    previousResult: nbumberBeforeCal,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operator);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult -= enteredNumber;
  writeResult("-", nbumberBeforeCal, enteredNumber);
}

function multiple() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult *= enteredNumber;
  writeResult("*", nbumberBeforeCal, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const nbumberBeforeCal = currentResult;
  currentResult /= enteredNumber;
  writeResult("/", nbumberBeforeCal, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
