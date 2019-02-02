var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  const array = [1];
  addElementToBeginningOfArray(array, 'chocolateBars');
  return addElementToBeginningOfArray();
}
