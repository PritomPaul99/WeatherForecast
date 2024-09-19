navigator.geolocation.getCurrentPosition(
  async (position) => {
    try {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      console.log(latitude, longitude);

      var map = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5863cb59bb064eca989192814241809&q=${latitude},${longitude}&aqi=no`
      );

      var userdata = await map.json();
      console.log(userdata);

      let cityName = document.getElementById("city-name");
      let weatherStat = document.getElementById("weather-main");
      let currentTemp = document.getElementById("temp");
      //   let weatherIcon = document.getElementById("weather-icon1");

      cityName.innerHTML = userdata.location.name;
      weatherStat.innerHTML = userdata.current.condition.text;
      currentTemp.innerHTML = Math.round(userdata.current.temp_c) + "°";
      //   weatherIcon.src = userdata.current.condition.icon;
      
      // todo: Complete the rest of the data.
    } catch (err) {
      console.error("An error occurred:", err);
    }
  },
  () => {
    alert("Please turn on your location and refresh the page");
  }
);
