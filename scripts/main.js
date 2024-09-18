navigator.geolocation.getCurrentPosition(
  async (position) => {
    try {
      let latitude = position.coords.latitude; 
      let longitude = position.coords.longitude; 

      console.log(latitude, longitude);
      

      
      var map = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5863cb59bb064eca989192814241809&q=${latitude},${longitude}`
      );

      var userdata = await map.json();
      console.log(userdata);
      
      let cityName = document.getElementById("city-name");
      let weatherStat = document.getElementById("weather-main");
      let currentTemp = document.getElementById("temp");

      cityName.innerHTML = userdata.location.name;
      weatherStat.innerHTML = userdata.current.condition.text;
      currentTemp.innerHTML = userdata.current.temp_c + "°";


      
    } catch (err) {
      console.error("An error occurred:", err);
    }
  },
  () => {
    alert("Please turn on your location and refresh the page");
  }
);
