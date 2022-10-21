function kontakt(){
    var ime = document.querySelector('#ime').value;
    var prezime = document.querySelector('#prezime').value;
    var kl = document.getElementsByTagName('input');
    var pol=' '; 
    for(let i=0;i<kl.length;i++){
        if(kl[i].type=="radio"){
            if(kl[i].checked){
                pol=kl[i].value;
            }
        }
    }
    var novosti = document.getElementsByTagName('input');
    for(let i=0;i<novosti.length;i++){
        if(novosti[i].type=="checkbox"){
            if(novosti[i].checked){
                if(novosti[i].value="vesti"){
                    novosti=true;
                }
                else{
                    novosti=false;
                }
            }
            else{
                novosti=false;
            }
        }
    }
    var poruka = document.querySelector("#poruka").value;

    var obavestenje = document.getElementById("alert");
    var podaci = document.getElementById("podaci");
    var primaNovosti = document.getElementById("primaNovosti");
    var vasaPoruka = document.getElementById("vasaPoruka");
    if(novosti==true){
        podaci.innerHTML="Ime: " + ime + " Prezime: " + prezime + " Pol: " + pol;
        primaNovosti.innerHTML = "Bićete obavešteni o novostima iz naše radnje!";
        vasaPoruka.innerHTML = "Vaša poruka: " + poruka;
    }
    else{
        podaci.innerHTML="Ime: " + ime + " Prezime: " + prezime + " Pol: " + pol;
        primaNovosti.innerHTML = "Nećete biti obavešteni o novostima iz naše radnje!";
        vasaPoruka.innerHTML = "Vaša poruka: " + poruka;
    }
    var obrazac = document.getElementById("obrazac");
    obrazac.innerHTML="Uspešno ste poslali obrazac!"
    
    obavestenje.style.display='block'; //obavestenje!
    var btn = document.getElementById("confirm");
    btn.addEventListener('click',function(){
        obavestenje.style.display='none';
        document.querySelector('#prezime').value = ' ';
        document.querySelector('#ime').value = ' ';
        document.querySelector("#poruka").value = ' ';
        var n = document.getElementsByTagName('input');
        for(let i=0;i<n.length;i++){
            if(n[i].type=="checkbox"){
                n[i].checked=false;
            }
            else{
                if(n[i].type=="radio"){
                    n[i].checked=false;
                }
            }
        }
    });
}
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
});

$("textarea").focus(function(){
    $(this).css("background-color", "#cccccc");
});


