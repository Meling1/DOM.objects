var ul = document.querySelector("ul");
//jedna od nacina je da UL elementu dodijelimo style "decimal"
// ul.style.listStyle = "decimal";

// drugi nacin je da iteriramo kroz Ul i svakom od Li elemenata promijenimo svojstvo na "decimal"

debugger;
var i = 1;

for (let elem of ul.children){
    elem.style.listStyle = "decimal";
    //elem.textContent = i + ". " + elem.textContent;
    i++; 
}

var divInfo = document.querySelector(".info");
divInfo.classList.add("sakrij");

var body = document.querySelector("body");
var bodyWindow = window.getComputedStyle(body, null);
var marginBody = bodyWindow.getPropertyValue("margin-left");

console.log("marginBody: " + marginBody);