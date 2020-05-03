let date = new Date(document.lastModified);
let time = date.toLocaleString('en-US');
    
document.getElementById("updating").textContent = time;