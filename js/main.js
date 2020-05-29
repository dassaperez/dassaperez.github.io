let date = new Date(document.lastModified);
let time = date.toLocaleString('en-US');
    
document.getElementById("updating").textContent = time;

//------------Font web-------------
WebFont.load({
    google: {
      families: [
         'Roboto Slab', 'Verdana'
      ]
    }
  });