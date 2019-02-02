var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  var element = ["adsd"];
  addElementToBeginningOfArray(element, ...chocolateBars);
  return addElementToBeginningOfArray();
}
