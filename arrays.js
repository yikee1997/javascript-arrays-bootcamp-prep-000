var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("candy");
}
function addElementToEndOfArray() {
  return [chocolateBars, ...]
}
function destructivelyAddElementToEndOfArray() {
  chocolateBars.push("candy")
}
