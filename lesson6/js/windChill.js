function chill(){
    let temp = parseFloat(document.getElementById("temp").textContent);
    let wind = parseFloat(document.getElementById("wind").textContent); 
    
    if (temp <= 50 && wind > 3){
    let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind,0.16) + 0.4275 * temp * Math.pow(wind,0.16);
   
     document.getElementById("chill").innerHTML = parseInt(f);      
    } 
    else{
     document.getElementById("chill").innerHTML = "N/A";       
    }
  }
   chill()