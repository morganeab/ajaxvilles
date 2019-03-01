'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let barrecp;
let jsonvar;
let jsonVille;
let selectville;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function barreInput() {
    
   
  
    
    const req = new XMLHttpRequest();
  
    
    req.onreadystatechange = function(event) {
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200 ) {
                console.log("Réponse reçue: %s", this.responseText);
                jsonvar = JSON.parse(this.responseText);
                console.log(jsonvar);
                
                while(selectville.firstChild) {
                    selectville.removeChild(selectville.firstChild);
                }
                
                 for(let i = 0; i < jsonvar.length; i++) {
              
                    let option = document.createElement('option');
                    option.innerHTML= jsonvar[i]['ville_nom_reel'];
                    option.value= jsonvar[i]['ville_id'];
                    selectville.appendChild(option);

                }
                
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };
    
    
    if(barrecp.value.length >= 2) {
    req.open('GET', 'http://morganeab.sites.pixelsass.fr/cours-php/villes-de-France/villes.php?codepost='+barrecp.value, true);
    req.send(null);
    }
  
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded',function(){ 
    
 barrecp = document.getElementById('cp');  
 barrecp.addEventListener('keyup', barreInput);
 selectville= document.getElementById('ville');

    

});