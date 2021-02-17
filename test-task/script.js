var result = document.querySelector(".result");
function plus() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    result.textContent = `Result: ${num1 + num2}`;
}

function minus() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    result.textContent = `Result: ${num1 - num2}`;
}
function devide(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    result.textContent = `Result: ${num1 / num2}`;
}
function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    result.textContent = `Result: ${num1 * num2}`;
}



