const btnSkrolGore = document.querySelector("#strelica");
btnSkrolGore.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0, 
        behavior: "smooth"
    });
});


var obavestenje = document.getElementById("alert");
var btns = document.getElementsByClassName('korpa');
var title = document.getElementsByClassName('title');
var cene = document.getElementsByClassName('cena');
var velicine = document.getElementsByClassName('velicina');
var proizvodjaci = document.getElementsByClassName('proizvodjac');
var arrayNaslovi = [];
var arrayCene = [];
var arrayVelicine = [];
var arrayProizvodjaci = [];

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        obavestenje.style.display='block'; //obavestenje!!
        arrayNaslovi.push(title[i].innerHTML);
        arrayCene.push(cene[i].innerHTML);
        arrayVelicine.push(velicine[i].innerHTML);
        arrayProizvodjaci.push(proizvodjaci[i].innerHTML);
        console.log(arrayNaslovi);
        console.log(arrayCene);
        console.log(arrayVelicine);
        console.log(arrayProizvodjaci);
        window.localStorage.setItem("naslov", JSON.stringify(arrayNaslovi));
        window.localStorage.setItem("cena",JSON.stringify(arrayCene));
        window.localStorage.setItem("velicina",JSON.stringify(arrayVelicine));
        window.localStorage.setItem('proizvodjac',JSON.stringify(arrayProizvodjaci));
    });
    window.localStorage.clear();
}


function hideAlert(){
    obavestenje.style.display='none';
}