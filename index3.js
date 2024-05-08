/* zadaci: HTML index3.html-a treba promijeniti pomocu js i html dom api-ja tako da:
- h1 element sadrzi tekst "Karlovac"
- span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
- div s klasom "info" sadrzi text "peta rijeka je piva."
- lista u footer elementu izlistava svih 5 karlovackih rijeka u li elementima */

var rijeke = ["Mrežnica", "Dobra", "Korana", "Kupa", "Karlovačko"];

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Karlovac"));

//trazimo body element
var bodyElem = document.querySelector("body");

//trazimo div element s klasom description
var dDescr = document.querySelector(".description");
//njegov inner html mijenjamo sa savojim custom html-om
dDescr.innerHTML = "grad na <h3>5 rijeka</h3>";

//kreiramo novi objekt u memoriji div sa class atributom i vrijednosti info
// <div class="info"></<div>
var divInfo = document.createElement("div");
divInfo.classList.add("info");
divInfo.innerText= "peta rijeka je piva.";

//nalazimo element footer s id=footer
// insertamo na body novi kreirani objekt i insertamo prije footer elementa

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

//trebamo naci <ul> element
var ul = document.querySelector("ul"); //dohvacen iz DOM-a

//maknemo sve li elemente iz template-a
for (let i = ul.childElementCount; i  > 0; i--){
    let child = ul.children[i - 1];
    ul.removeChild(child);
}

//dodajemo nove li elemente s tim da na svaki li element dodajemo i text/content
for(let i = 0; i < 5; i++){
    let li = document.createElement("li");
    li.textContent=rijeke[i];
    ul.appendChild(li); 
}

