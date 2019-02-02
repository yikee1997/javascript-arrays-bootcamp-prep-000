var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(){
  const array = [100];
  addElementToBeginningOfArray(array, chocolateBars);
  return addElementToBeginningOfArray();
}
