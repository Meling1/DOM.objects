console.log("visina je: " + window.innerHeight);
console.log("širina je: " + window.innerWidth);

console.log("domena je: " + window.location.hostname);

var x = window.confirm("ovime prihvacate nasu politiku o kolacicima");
console.log("response= " + x);
if(x == true){
    console.log("korisnik odgovorio OK");
} else {
    console.log("korisnik odgovorio not OK");
    window.location = "onama.html"
}

//window.location ="onama.html";