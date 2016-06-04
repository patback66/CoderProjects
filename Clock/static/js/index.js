$(document).ready( function() {

  function displayTime() {
    // For time display
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    var ampm = ""
    
    if (hours >= 0 && hours < 12) {
        ampm = "AM"
    } else {
        ampm = "PM"
    }

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + ampm;
    
    var dateDiv = document.getElementById('date');
    //set inner text
    dateText = currentTime.toDateString();
    dateDiv.innerText = dateText;
  }


  // This runs the displayTime function the first time
  setInterval(displayTime, 1000);

});