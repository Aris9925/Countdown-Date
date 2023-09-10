var now = new Date().getTime();
var days;
var timeleft;

const dateInput = document.getElementById("anyDate");




function callBirthCountdown(){
    if(dateInput.value){
      const date = new Date(dateInput.value).getTime();
      
      timeleft = date - now;
      setInterval(showDateCountdown, 1000);

    }

    else
      alert("Enter age");

}


function showDateCountdown(){
  timeleft -=1000;

  const dateDisplay = document.getElementById("dateDisplay");
  const countdown = document.querySelector("#countdownDisplay");

 
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-3);
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    dateInput.style.display = "none";
    dateDisplay.style.display = "none";
    countdown.style.display = "flex";
    countdown.style.justifyContent =  "space-between";
    countdown.style.flexDirection = "column";

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(now==date)
    {
      echo ("The Date Has Come!!!!!!!");
      clearInterval();

    }

  

}