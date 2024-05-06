console.log("Visina je: " + window.innerHeight);
console.log("Širina je: " + window.innerWidth);

console.log("Domena je: " + window.location.hostname);

var x = window.confirm("Ovime prihvaćate našu politiku o kolačićima");

console.log("Response= " + x);

debugger;

if(x == true){
    console.log("Korisnik odgovorio OK");
} 
else {
    console.log("Korisnik odgovorio not OK");
    window.location = "onama.html"
    return;
}

//console.log("End page 1");
//window.alert("test alert");
console.log("End page");

window.setTimeout(function() {
    console.log("Ispis sa delay od 2 sek");
},
    2000);

