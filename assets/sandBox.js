//display spaces
let clockSpace = document.getElementById('clock-space');
let alarmSpace = document.getElementById('alarm-space');
let stopwatchSpace = document.getElementById('stopwatch-space');
let timerSpace = document.getElementById('timer-space');

var displaySpaces = [clockSpace, alarmSpace, stopwatchSpace, timerSpace];

//buttons for display spaces
let hClock = document.getElementById("h-clock");
let  hTimer = document.getElementById("h-timer");
let hAlarm = document.getElementById("h-alarm");
let hStopwatch = document.getElementById("h-stopwatch");

let headBtns = [hClock, hTimer, hAlarm, hStopwatch];

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
        
    });
})