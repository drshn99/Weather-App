const apiKey = "659bc1faf23628b278513ae7c6e78f51";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (data.name === undefined) {
    document.body.innerHTML = `////////////////////////////////////////////////////////////404 ERROR city not find////////////////////////////////////////////////////////////`;
  }
  document.querySelector(".place").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°";
  document.querySelector(".weatherCondition").innerHTML = data.weather[0].main;
  document.querySelector(".date").innerHTML =
    Math.round(data.wind.speed) + " km/h";
};
searchbtn.addEventListener("click", () => checkWeather(searchBox.value));

console.log("this is the error", error);


