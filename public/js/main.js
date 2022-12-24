const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_Name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal == "") {
    city_Name.innerText = "Plz write the Name before Search";
  } else {
    try {
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityVal +
        "&appid=76ffe81000b72ee8c66b23ddcb83bda0";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];
      city_Name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
    } catch {
      city_Name.innerText = "Plz enter city name properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
