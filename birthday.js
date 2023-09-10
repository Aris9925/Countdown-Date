var now = new Date().getTime();
var days;
var timeleft;

const birthdayInput = document.getElementById("birthday");




function callBirthCountdown(){
    if(birthdayInput.value){
      const birthday = new Date(birthdayInput.value).getTime();
      console.log(birthday);
      timeleft = birthday - now;
      setInterval(showBirthdayCountdown, 1000);

    }

    else
      alert("Enter age");

}


function showBirthdayCountdown(){
  timeleft -=1000;

  const birthDisplay = document.getElementById("birthdayDisplay");
  const countdown = document.querySelector("#countdownDisplay");

 
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-3);
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    birthdayInput.style.display = "none";
    birthDisplay.style.display = "none";
    countdown.style.display = "flex";
    countdown.style.justifyContent =  "space-between";
    countdown.style.flexDirection = "column";

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(now==birthday)
    {
      echo ("HAPPY BIRTHDAY!!!!!!!");
      clearInterval();

    }

  

}