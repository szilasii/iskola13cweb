function kiir(szoveg) {
 document.getElementById("eredmeny").innerHTML += szoveg +"<br>"
}

function tombKiir (tomb) {
    tomb.forEach(element => {
        document.getElementById("eredmeny").innerHTML += element +"<br>"
    });

}

function osszeg (tomb) {
    let osszeg = 0
    tomb.forEach(element => {
        osszeg += parseInt(element)
    });
    return osszeg
}

var szoveg  = "Maci dalol a mezőn és nézi az eget.\n";

function csinald() {
    kiir(szoveg.length)
    kiir(szoveg.substring(5))  
    kiir(szoveg.substring(-5,15))  
    kiir(szoveg.replace("Maci","Macika")) 
    kiir(szoveg.concat(["buborek","jhgsdhghgsdf"]))
    kiir(szoveg.charAt(8))
    tombKiir(szoveg.split(" "))
    kiir(szoveg.toLowerCase());
    kiir(szoveg.toUpperCase());
    kiir(szoveg.trim());
    szovegtomb="1,2,3,4,5"
    tomb = szovegtomb.split(",") 
    kiir(osszeg(tomb))
}


