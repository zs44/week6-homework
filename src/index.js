let apikey = "dc913128ccaa43cdc1ca63d7d482beef";
function updatefunc(event, apikey) {
  event.preventDefault();
  let currentCity = document.querySelector(".currentCity");
  let searchInput = document.querySelector("#searchTextInput");
  let cityName = searchInput.value;
  console.log(cityName);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`;
  https: axios.get(apiUrl).then(showCity);
}

let form = document.querySelector(".searchForm");
form.addEventListener("submit", function () {
  updatefunc(event, apikey);
});

function showCity(response) {
  let h4Elm = document.querySelector(".currentCity");
  let h4Degree = document.querySelector(".h4Degree");

  h4Elm.innerHTML = response.data.name;
  h4Degree.innerHTML = response.data.main.temp;
}
function showCurrentTemp(response) {
  let h4Elm = document.querySelector(".currentCity");
  let h4Degree = document.querySelector(".h4Degree");

  h4Elm.innerHTML = response.data.name;
  h4Degree.innerHTML = response.data.main.temp;
}
function showPosition(position) {
  
  let part = "current";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}`;
  axios.get(apiUrl).then(showCurrentTemp);
  console.log(position.coords.latitude);
  console.log(apiUrl);
  console.log(position.coords.longitude);
}
function handlePosition(event) {
    event.preventDefault();

  navigator.geolocation.getCurrentPosition(showPosition);
}

let btn = document.querySelector(".GEOClass");
btn.addEventListener("click", function () {
  handlePosition(event);
});
