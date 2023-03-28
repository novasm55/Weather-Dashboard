
//GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

//API Key
var apiKey = "a09d33651864566372276fdd0b24595f";



var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', getTodayResults);
searchBtn.addEventListener('click', getForecastResults);
// Add local storage set to store search query

console.log("test is displaying!");

//Today's API 
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a09d33651864566372276fdd0b24595f


function getTodayResults() {
    //sample fetch request
    var apiUrl  = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + ",&APPID=a09d33651864566372276fdd0b24595f";
      fetch(apiUrl, {
        method: 'GET', //GET is the default.
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
      

        var cityName = data.name;
        document.getElementById("cityName").innerHTML = "Location: " + cityName;
          //var date = dayjs.unix(unixTimestamp).format('DD/MM/YYYY');
        console.log(cityName);
        console.log("getTodayResults API response received!");
        
        callBackToCurrent(cityName);
      });
  
  }   
  function callBackToCurrent(name){
    cityName = name;
    console.log(cityName)
    return
  }

// function callBackToCurrent(current){
//   console.log(current);
// }
//5 Day Forecast
var dayOne = document.getElementById("#day1");
var dayTwo = document.getElementById("#day2");
var dayThree = document.getElementById("#day3");
var dayFour = document.getElementById("#day4");
var dayFive = document.getElementById("#day5");
// dateOne.innerHTML = 
// var dateTwo = document.getElementById("#dateTwo")
// var dateThree = document.getElementById("#dateThree")
// var dateFour = document.getElementById("#dateFour")
// var dateFive = document.getElementById("#dateFive")

function getForecastResults() {
  //sample fetch request
  var apiUrl2  = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + ",&APPID=a09d33651864566372276fdd0b24595f";
    fetch(apiUrl2, {
      method: 'GET', //GET is the default.
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

       var dayZero = {date: data.list[0].dt_txt, humidity: data.list[0].main.humidity, temp: data.list[0].main.temp, wind: data.list[0].wind.speed}
       var dayOne = {date: data.list[8].dt_txt, humidity: data.list[8].main.humidity, temp: data.list[8].main.temp, wind: data.list[8].wind.speed}
       var dayTwo = {date: data.list[16].dt_txt, humidity: data.list[16].main.humidity, temp: data.list[16].main.temp, wind: data.list[16].wind.speed}
       var dayThree = {date: data.list[24].dt_txt, humidity: data.list[24].main.humidity, temp: data.list[24].main.temp, wind: data.list[24].wind.speed}
       var dayFour = {date: data.list[32].dt_txt, humidity: data.list[32].main.humidity, temp: data.list[32].main.temp, wind: data.list[32].wind.speed}
       var dayFive = {date: data.list[39].dt_txt, humidity: data.list[39].main.humidity, temp: data.list[39].main.temp, wind: data.list[39].wind.speed}
     //  var dayThree = {date: data.list[24].dt_txt, humidity: data.list[24].main.humidity, temp: data.list[24].main.temp}
      //  var unix2 = data.list[2].dt
      //  var unix3 = data.list[3].dt
      //  var unix4 = data.list[4].dt
      //  var unix5 = data.list[5].dt


      //  var dateOne = dayjs.unix(unixTimeStamp).format('DD/MM/YYYY');
      //  var dateTwo = dayjs.unix2(unixTimestamp2).format('DD/MM/YYYY');
      //  var dateThree = dayjs.unix3(unixTimestamp[3]).format('DD/MM/YYYY');
      //  var dateFour = dayjs.unix4(unixTimestamp[4]).format('DD/MM/YYYY');
      //  var dateFive = dayjs.unix5(unixTimestamp[5]).format('DD/MM/YYYY');
      console.log(data.list[0].main.humidity);
      console.log(data.list[0].main.temp);
    // console.log(array display in inspector)
      console.log(data.list);
     // console.log(test for getForecastResults API response received?)
      console.log("getForecastResults API response received!");
      callBackToForecast(dayZero);
      document.getElementById("day0").innerHTML = "Today: " + JSON.stringify(dayZero);

      callBackToForecast(dayOne);
      document.getElementById("day1").innerHTML = "Today +1: " + JSON.stringify(dayOne);

      callBackToForecast(dayTwo);
      document.getElementById("day2").innerHTML = "Today +2: " + JSON.stringify(dayTwo);

      callBackToForecast(dayThree);
      document.getElementById("day3").innerHTML = "Today +3: " + JSON.stringify(dayThree);

      callBackToForecast(dayFour);
      document.getElementById("day4").innerHTML = "Today: +4" + JSON.stringify(dayFour);

      callBackToForecast(dayFive);
      document.getElementById("day5").innerHTML = "Today: +5" + JSON.stringify(dayFive);
 
    

  


    });
}   

function callBackToForecast(day){

  console.log(day);
  return
}
// var dayZero = getForecastResults()

//var apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

//var apiURL3 = "http://api.openweathermap.org/geo/1.0/direct?q="cityName"&limit=3&appid="apiKey
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// function getForecastResults() {
//     //sample fetch request
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&appid=" + apiKey, {
//       method: 'GET', //GET is the default.
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         console.log(cityName);
//         console.log("getForecastResults API response received!");
//       })

console.log(cityName);