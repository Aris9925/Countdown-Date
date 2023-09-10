var now = new Date().getTime();
const christmasDate = new Date('25 Dec 2023 00:00:00').getTime();

var timeLeft = christmasDate - now;

var days;
var hours;
var minutes;
var seconds;

days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;


setInterval(daysToChristmas, 1000);

function daysToChristmas(){
  now = new Date().getTime();

  timeLeft-=1000;

days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(now==christmasDate)
{
  echo ("MERRY CHRISTMAS!!!!!");
  clearInterval();

}
}





