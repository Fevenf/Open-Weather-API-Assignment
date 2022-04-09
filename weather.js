let weather = {
    apikey: "af01f14b01d43276fe8c6cb5b386afd3",
  };
  
  function zipCode() {
    var zip = document.getElementById("req").value;
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${weather.apikey}`
    )
      .then((result) => {
        return result.json();
      })
      .then((weather) => {
        // console.log(weather);
        console.log(document.getElementsByClassName("city"));
        document.getElementsByClassName("weather")[0].style.display = "block";
        document.getElementsByClassName("city")[0].innerHTML = weather.name;
        document.getElementsByClassName("temp")[0].innerHTML = weather.main.temp;
        document.getElementsByClassName("currentcondition")[0].innerHTML =weather.weather[0].description;
        const todaysDate = new Date(weather.dt * 1000);
        document.getElementsByClassName("date")[0].innerHTML =
        (todaysDate.getMonth() + 1)  + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();
        document.getElementsByClassName("humidity")[0].innerHTML = weather.main.humidity;
        document.getElementsByClassName("temp_high")[0].innerHTML = weather.main.temp_max;
        document.getElementsByClassName("temp_low")[0].innerHTML = weather.main.temp_min;
        document.getElementsByClassName("icon")[0].src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
      });
  }
  