const task = "2 + 2 * 2 = ?";
let result = prompt(task);
while(result != (2 + 2 * 2)) {
    result = prompt(task);
};
alert("Congratulations!!!");