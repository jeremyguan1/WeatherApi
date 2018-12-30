document.addEventListener("DOMContentLoaded", function(event) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            req = new XMLHttpRequest();
            req.open("GET",`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,true);
            req.send();
            req.onload=function(){
                let json=JSON.parse(req.responseText);
                let weatherBox = document.querySelector('.weather');
                let sky= json.weather[0].main;
                let temp = json.main.temp;
                let country = `${json.name},${json.sys.country}` ;
                let icon = json.weather[0].icon;
                let html = "";
                html += `<div class=country>${country}</div><br />`
                html += `<div class=temp>${temp}<span style="color:#00FFFF"> °C</span></div><br />`
                html += `<div class=sky>${sky}</div><br />`
                html += `<img src='${icon}' alt='Weather Condition' class="weatherIcon"></img><br />`
                weatherBox.innerHTML = html;
            }
          });
      } else {
        /* geolocation IS NOT available */
      }
  
  });