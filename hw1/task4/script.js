const pass = "pass123";
const adminPass = "admin"
let enteredPass = prompt("Enter password:");
let isAdmin = enteredPass === adminPass;
let isUser = enteredPass === pass;
alert(isAdmin ? "You are logged in as admin" : 
      isUser ? "You are logged in as user" :
      "Wrong password")

