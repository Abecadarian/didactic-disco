$(function(){

 function onDeviceReady() {
    // Handle the Cordova pause and resume events
    document.addEventListener( 'pause', onPause.bind( this ), false );
    document.addEventListener('resume', onResume.bind(this), false);

    $('#get-weather-btn').click(getWeatherWithZipCode);
     getWeatherWithGeoLocation();
};
});
