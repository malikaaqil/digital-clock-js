var date = document.getElementById("date");
var time = document.getElementById("time");

function setTime() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  
  var am_pm = hours >= 12 ? "PM" : "AM";

  if (hours < 10) {
    hours = "0" + hours
  }


  if (minutes < 10) {
    minutes = "0" + minutes
  }
  

  if (seconds < 10) {
    seconds = "0" + seconds
  }


  if (day < 10) {
    day = "0" + day
  }

  if (month < 10) {
    month = "0" + month
  }


  var currentTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  var currentDate = day + "/" + month + "/" + year;

  time.innerText = currentTime;
  date.textContent = currentDate;

}

setInterval(setTime, 1000)
setTime()