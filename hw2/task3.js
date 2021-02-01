function calc(a, operation, b) {
    var result;
    if (["+", "-", "*", "/"].includes(operation)) {
        if (operation === "+") {
            result = a + b;
        } else if (operation === "-") {
            result = a - b;
        } else if (operation === "*") {
            result = a * b;
        } else if (operation === "/") {
            result = a / b;
        }
        return result;
    } else throw "Wrong parameter exception. (Permissible '+', '-', '*', '/')";
};
try {
    console.log(calc(4, "2", 2));
} catch (error) {
    console.error(error);
};