var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]
candyString = "foo"
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
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
