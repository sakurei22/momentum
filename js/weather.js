const API_KEY = 'fe466ae6ec9b3eb03afd9bba02897e8f';

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
        .then((response) => response.json())
        .then((data) => {

            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerHTML = `${data.weather[0].main} ${data.main.temp}`;
            city.innerHTML = data.name;
            
   });
}

function onGeoError(){
    alert("cant find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);