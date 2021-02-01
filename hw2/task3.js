function calc(a, operation, b) {
    var result;
    if (operation === "+") {
        result = a + b;
    } else if (operation === "-") {
        result = a - b;
    } else if (operation === "*") {
        result = a * b;
    } else if (operation === "/") {
        result = a / b;
    } else {
        result = "Wrong parameter. (Permissible '+', '-', '*', '/')";
    }
    return result;
}
console.log(calc(4, "+", 2));