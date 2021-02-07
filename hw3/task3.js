function find(arr, value) {
    var result = arr.find(el => el === value);
    return result != undefined ? result : -1;
}
var arr = [1,2,4,5,6];
console.log(find(arr, 3) + "\n" + find(arr, 1));
