var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]
var candyString = ["foo"]
function addElementToBeginningOfArray([1], 'foo'){
  return ['foo', 1];
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
