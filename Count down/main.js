var dateForm = document.getElementById("date-form");
var countdownBox = document.getElementById("countdown-box");

dateForm.addEventListener('submit', e => {
    e.preventDefault()

    var dateInput = document.getElementById("date-input");
    var timeInput = document.getElementById("time-input");
    var evendate = Date.parse(dateInput.value + " " + timeInput.value);

    console.log(evenDate);
})

window.eventCountdown && clearInterval(window.eventCountdown);

var eventCountdown = setInterval(()=> {
    window.eventCountdown = eventCountdown;
    var now = new Date().getTime();

    var daysDivider = 1000 * 60 * 60 * 24;
    var hoursDivider = 1000 * 60 * 60;
    var minutesDivider = 1000 * 60;
    var hsecondsDivider = 1000;

    var d = Math.floor(evenDate / daysDivider - now / daysDivider);
    var h = Math.floor((evenDate / hoursDivider - now / hoursDivider) % 24);
    var m = Math.floor((evenDate / minutesDivider - now / minutesDivider) % 60);
    var s = Math.floor((evenDate / secondsDivider - now / secondsDivider) % 60);

    var diff = evenDate - now;

    if(diff > 0){
        countdownBox.innerHTML =  '${d} days, ${h} hours, ${m} minutes, ${s} seconds'; 
    }else{
        countdownBox.innerHTML = "<b>cutdown completed</b>";
    }





}, 1000)