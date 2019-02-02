var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
array = [1]
function addElementToBeginningOfArray(array, element){
  return addElementToBeginningOfArray(array, ...chocolateBars);
}
