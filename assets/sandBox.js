//display spaces
let clockSpace = document.getElementById('clock-space');
let alarmSpace = document.getElementById('alarm-space');
let stopwatchSpace = document.getElementById('stopwatch-space');
let timerSpace = document.getElementById('timer-space');
let bedSpace = document.getElementById('bedtime-space');

var displaySpaces = [clockSpace, alarmSpace, stopwatchSpace, timerSpace, bedSpace];

//buttons for display spaces
let hClock = document.getElementById("h-clock");
let  hTimer = document.getElementById("h-timer");
let hAlarm = document.getElementById("h-alarm");
let hStopwatch = document.getElementById("h-stopwatch");
let hBedtime = document.getElementById("h-bedtime");

let headBtns = [hClock, hTimer, hAlarm, hStopwatch, hBedtime];

//code to show time 
let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let second = document.getElementById("sec");
let session = document.getElementById("session");

//function for time
displayTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ses = "am";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        ses = "pm"
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    second.innerHTML = ss;
    session.innerHTML = ses

    setTimeout( () => {
        displayTime()
    }, 1000);
}
displayTime(hours, minutes, second);

//declaring the dates
let realDate = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');
let weDay = document.getElementById('day');

//function to display date
let date = new Date();
let day = date.getDay();
let mnt = date.getMonth();
let yr = date.getFullYear();
let weekDay = date.getUTCDay();

year.innerHTML = yr;
month.innerHTML = mnt;
realDate.innerHTML = day;
weDay.innerHTML = weekDay;

headBtns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        btn.classList.add('active');

        let otherBtns = headBtns.filter((otherBtns) =>{
            return otherBtns !== btn;
        });
        otherBtns.forEach((btns) => {
            btns.classList.remove('active');
        });

        //#02 function to determine displayed section
        displayedSection = (hBtn, correspondingDisplay) => {
            if (btn == hBtn) {
                correspondingDisplay.style.display = 'block';
    
                let otherDisplays = displaySpaces.filter((otherDisplays) => {
                    return otherDisplays !== correspondingDisplay; 
                });
                otherDisplays.forEach((displays) => {
                    displays.style.display = 'none';
                });
            };
        };
        //calling function #02
        displayedSection(hClock, clockSpace);
        displayedSection(hTimer, timerSpace);
        displayedSection(hAlarm, alarmSpace);
        displayedSection(hStopwatch, stopwatchSpace);
        displayedSection(hBedtime, bedSpace);        
    });
});