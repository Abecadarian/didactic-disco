var APPID = ''; // Application ID
var DEG = 'c'; // c for celsius, f for fahrenheit
var Place;
var weather = require('weather');
function SetLocation() {
    Place = document.getElementById('dropdown').value;
    //        document.getElementById("demo").innerHTML = Place;
    weather;
    weather({ location: 'Melbourne' }, function (data) {
        document.getElementById("demo").innerHTML = data.temp.toString();
    });
}
