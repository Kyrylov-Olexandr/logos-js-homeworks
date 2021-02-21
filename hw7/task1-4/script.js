//task 1
function fillLists() {
    var listsElems = document.querySelectorAll("li");
    listsElems.forEach(el => el.textContent = Math.random().toString(36).substring(7));
    var p = document.createElement("p");
    document.querySelector(".task1").appendChild(p);
    p.textContent = `'li' elements amount = ${listsElems.length}`;
}

//task2
var blockTask2 = document.querySelector(".task2");
var btn2 = document.createElement("button");
var textTask2 = document.createElement("p");
btn2.textContent = "Click on me to hide the text below me";
btn2.onclick = () => textTask2.style.display = "none";
textTask2.textContent = "Hide this text to complete task 2";
blockTask2.append(btn2, textTask2);

//task 3
var btn3 = document.createElement("button");
btn3.textContent = "HIDE ME!";
btn3.onclick = () => btn.style.display = "none";
document.querySelector(".task3").appendChild(btn3);

//task 4
var blockTask4 = document.querySelector(".task4");
var menuHeading = document.createElement("h3");
menuHeading.textContent = "Університет";
var menu = document.createElement("ol");
blockTask4.append(menuHeading, menu);
for(let i = 0; i < 3; i++) {
    let menuItem = document.createElement("li");
    switch(i) {
        case 0 : menuItem.textContent = "кафедра ІСМ"; break;
        case 1 : menuItem.textContent = "кафедра ЕСМ"; break;
        case 2 : menuItem.textContent = "кафедра політології"; break;
    }
    menu.appendChild(menuItem);
}
menuHeading.onclick = function() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

