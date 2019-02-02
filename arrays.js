var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  var element = ["adsd"];
  return addElementToBeginningOfArray(element, ...chocolateBars);
}