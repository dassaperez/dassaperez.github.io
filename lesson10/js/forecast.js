const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3648559&units=imperial&appid=3857ba2acf06e72d887f7365beccbbad";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    /*this is the variable for the json data we requested*/
    console.log(jsObject); /* this check to see if the json data is being called*/
    document.getElementById('current').textContent = "Currently : " + jsObject.weather[0].description;
    document.getElementById('high').textContent = "High : " + jsObject.main.temp.toFixed(0);
    document.getElementById('humid').textContent = "Humidity : " + jsObject.main.humidity + "%";
    document.getElementById('wind').textContent = "Wind Speed : " + jsObject.wind.speed;
    /* we created a span with the id of current-temp, we are assigning the json data 
     main.temp to that Id and placing it in the HTML span*/

  });

const dayForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3648559&appid=3857ba2acf06e72d887f7365beccbbad&units=imperial";
fetch(dayForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); /* this lets me see all the json data in the console*/

    const myList = jsObject['list']; /* this is the array with 40 objects*/




    const sixoclock = myList.filter(x => x.dt_txt.includes("18:00:00"));
    /* I want to
       create a smaller list with only objects that are at 6:00, 18:00:00*/
    console.log(sixoclock);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let day = 0;
    sixoclock.forEach(forecast => {
      let d = new Date(forecast.dt_txt);
      
      document.getElementById(`high${day+1}`).textContent = forecast.main.temp.toFixed(0) + "° F";
      document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
      
 
      const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png';
      const desc = forecast.weather[0].description;
      document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;
    });



  });