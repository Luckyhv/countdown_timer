var daysel = document.getElementById('days');
var hoursel = document.getElementById('hours');
var minutesel = document.getElementById('mins');
var secondsel = document.getElementById('sec');
const newyear="01 Jan 2023";

function countdown(){
    const nydate=new Date(newyear);
    const currentdate=new Date();
    const tseconds=Math.floor((nydate-currentdate)/1000);

    const days=Math.floor(tseconds/3600/24);
    const hours=Math.floor((tseconds/3600)%24);
    const minutes=Math.floor((tseconds/60)%60);
    const seconds=Math.floor(tseconds%60);

    // console.log(days,hours,minutes,seconds);

    daysel.innerHTML= days ;
    hoursel.innerHTML = hours;
    minutesel.innerHTML = minutes;
    secondsel.innerHTML = seconds;
}
countdown()
setInterval(countdown,1000)