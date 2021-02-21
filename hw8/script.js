var myInput = document.createElement("input");
myInput.value = "Enter text"
myInput.type = "text";
document.body.append(myInput);
myInput.onfocus = function() { this.value = "" };
myInput.onblur = function() { this.value = "Enter text" };
var form = document.querySelector("form");
form.onsubmit = function() { alert("submited") };
form.onreset = function() { alert("reseted") };


