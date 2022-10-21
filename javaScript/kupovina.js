var proizvodi = localStorage.getItem('naslov');

function porudzbina(){
        var ime = document.querySelector('#ime').value;
        var prezime = document.querySelector('#prezime').value;
        var adresa = document.querySelector('#adresa').value;
        var grad = document.querySelector('#grad').value;
        var kontakt = document.querySelector('#kontakt').value;
        var email = document.querySelector('#mejl').value;

        var placanje = "";
        var isporuka = "";
        var stiklirano = document.getElementsByTagName('input');
        for(let i=0;i<stiklirano.length;i++){
                if(stiklirano[i].type=='radio'){
                    if(stiklirano[i].checked){
                            if(stiklirano[i].value =='gotovina'){
                                    placanje = "Gotovina";
                            }
                            if(stiklirano[i].value=='placanje-u-radnji'){
                                    placanje = "Plaćanje u radnji";
                            }
                            if(stiklirano[i].value=='platnaK'){
                                    placanje = "Platna kartica";
                            }
                            if(stiklirano[i].value=='bex'){
                                    isporuka = "Bex";
                            }
                            if(stiklirano[i].value=='aks'){
                                    isporuka="Aks";
                            }
                            if(stiklirano[i].value=='posta'){
                                    isporuka="Pošta Srbije"
                            }
                            if(stiklirano[i].value =='preuzimanje'){
                                    isporuka="Preuzimanje u radnji";
                            }
                        }    
                }
        }

        var podaci = document.getElementById("podaci");
        podaci.innerHTML = "Ime: " + ime + " Prezime: " + prezime + " Kontakt: " + kontakt + " E-mail: " + email;

        var adresa = document.getElementById("adresa");
        adresa.innerHTML = "Adresa: " + adresa;

        var grad = document.getElementById("grad");
        grad.innerHTML = "Grad: " + grad;

        var isplata = document.getElementById("isplata");
        isplata.innerHTML  = "Isplata: " + placanje;

        var dostava = document.getElementById("dostava");
        dostava.innerHTML = "Dostava: " + isporuka;

        var hvala = document.getElementById("hvala");
        if(proizvodi!=null){
                hvala.innerHTML = "Hvala na kupovini!";
        }
        else{
                hvala.innerHTML = "Niste ubacili u korpu proizvod. Proces kupovine nije moguć!";
        }

        var obavestenje = document.getElementById("alert");
        obavestenje.style.display = 'block';

        var btn = document.getElementById("confirm");
        btn.addEventListener('click',function(){
                obavestenje.style.display = 'none';
                document.querySelector('#ime').value=' ';
                document.querySelector('#prezime').value=' ';
                document.querySelector('#adresa').value=' ';
                document.querySelector('#grad').value=' ';
                document.querySelector('#kontakt').value=' ';
                document.querySelector('#mejl').value=' ';
                var n = document.getElementsByTagName('input');
                for(let i=0;i<n.length;i++){
                        if(n[i].type=='radio'){
                                n[i].checked = false;
                        }
                }
        })
}
if(proizvodi!=null){
        proizvodi=proizvodi.replace('[','');
        proizvodi=proizvodi.replace(']','');
       document.getElementById('proizvodi').innerHTML = proizvodi;
}

$("input").focus(function(){
        $(this).css("background-color", "#cccccc");
});
    
