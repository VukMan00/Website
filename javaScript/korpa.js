

function dodaj(){
    try{
        var obavestenje = document.getElementById("alert");
        var naslovi = window.localStorage.getItem('naslov');
        naslovi=naslovi.replace('[','');
        naslovi=naslovi.replace(']','');
        const naslov = naslovi.split(",");
      
        var cene = window.localStorage.getItem('cena');
        cene=cene.replace('[','');
        cene=cene.replace(']','');
        const cena = cene.split(",");
      
        var velicine = window.localStorage.getItem('velicina');
        velicine=velicine.replace('[','');
        velicine=velicine.replace(']','');
        const velicina = velicine.split(",");
      
        var proizvodjaci = window.localStorage.getItem('proizvodjac');
        proizvodjaci=proizvodjaci.replace('[','');
        proizvodjaci=proizvodjaci.replace(']','');
        const proizvodjac = proizvodjaci.split(",");
    
        var ukupnaCena = 0;

        for(let i=0;i<naslov.length;i++){
            naslov[i] = naslov[i].slice(1,naslov[i].length-1);

            cena[i] = cena[i].slice(1,cena[i].length-1);
            const cena1 = cena[i].split(":");

            velicina[i] = velicina[i].slice(1,velicina[i].length-1);
            const velicina1 = velicina[i].split(":");

            proizvodjac[i] = proizvodjac[i].slice(1,proizvodjac[i].length-1);
            const proizvodjac1 = proizvodjac[i].split(":");

            //Ubacujemo red
            var table = document.getElementById("tbody");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = naslov[i];
            cell2.innerHTML = cena1[1];
            cell3.innerHTML = velicina1[1];
            cell4.innerHTML = proizvodjac1[1];

            ukupnaCena = ukupnaCena + parseInt(cena1[1]);
            console.log(ukupnaCena);
        }


    window.localStorage.clear;

    const blokirajDugme = document.getElementById("dugme");
    blokirajDugme.setAttribute('disabled','disabled');

    const ukupna = document.getElementById("ukupnaCena");
    ukupna.innerHTML = "Ukupna cena artikala: " + ukupnaCena + "RSD";
    

    }catch(err){
        obavestenje.style.display='block';
        var obavestenje = document.getElementById("alert");
        const confirm = document.getElementById("confirm");
        confirm.addEventListener('click', function(){
            obavestenje.style.display='none';
        });
        
    }
}

