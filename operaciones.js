function jugar (obj){

    var pc;
    var objetos=["piedra","papel","tijeras"];

    pc=Math.floor(Math.random()*3);

    usuario=(objetos[obj]);
    dpc=(objetos[pc]);

    console.log(objetos[obj]);
    console.log(objetos[pc]);

    document.getElementById("humano").innerHTML=objetos[obj];
    document.getElementById("pc").innerHTML=objetos[pc];


 if (dpc=="piedra"&& usuario=="piedra"){
    res="Empate";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
}
    
if (dpc=="piedra"&& usuario=="papel"){
    res="papel gana a piedra, gana usuario";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
        
 }
            
if (dpc=="piedra"&& usuario=="tijeras"){
   res="piedra gana a tijeras, gana PC";
   console.log(res)
    document.getElementById("resultado").innerHTML=res;
        
 }
            

if (dpc=="papel"&& usuario=="papel"){
    res="empate";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
                    
    }
if (dpc=="papel"&& usuario=="piedra"){
    res="papel gana a papel, gana PC";
    console.log(res)
     document.getElementById("resultado").innerHTML=res;
                        
        }
if (dpc=="papel"&& usuario=="tijeras"){
    res="tijeras gana a papel, gana Usuario";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
                            
            }        
 if (dpc=="tijeras"&& usuario=="tijeras"){
    res="Empate";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
                                

                }
if (dpc=="tijeras"&& usuario=="papel"){
   res="tijeras gana a papel, Pc gana";
   console.log(res)
   document.getElementById("resultado").innerHTML=res;
                                                
}
if (dpc=="tijeras"&& usuario=="piedra"){
    res="piedra gana a tijeras, Usuario gana";
    console.log(res)
    document.getElementById("resultado").innerHTML=res;
                                                 
 }
}