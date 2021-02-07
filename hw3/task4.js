function filterRange(array, a, b) {
    return array.filter(el => el >= a && el <= b);
}
var arr = [1,2,3,4,5,6,7,8,9];
console.log(filterRange(arr, 3, 7));