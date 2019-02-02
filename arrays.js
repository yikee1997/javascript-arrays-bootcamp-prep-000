var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]

function addElementToBeginningOfArray() {
  return [..., chocolateBars];
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
