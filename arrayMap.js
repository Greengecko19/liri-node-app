
const array = [1,2,3,4,5]
const newArray = array.map(function(num) { return num + 1});
const newerArray = array.map(num => num + 1);
console.log(newArray);
// [2, 3, 4, 5, 6]