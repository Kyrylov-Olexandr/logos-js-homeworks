var arr = [-5,12,4,1,-11,24,45,-2,-23,55,100, 67, 109,123, -1123, 65, 3, 15, 55, 12224, 0];

//TASK 1
var sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
var descSortedArr = arr.sort((a, b) => b - a);
console.log(descSortedArr);

//TASK 2
var posNums = arr.filter(num => num > -1);
var negNums = arr.filter(num => num < 0);
console.log(posNums);
console.log(negNums);



