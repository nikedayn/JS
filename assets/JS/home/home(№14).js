const btnForClock = document.querySelector("#clockCreateAndDelete");
const clockHTML = document.querySelector("#clockHTML");
const inputForTimer = document.querySelector("#inputForTimer");
const timerHTML = document.querySelector("#timerHTML");

let flag = 0;

let youTime = {};

let normalTime = (times)=>{
    if(times.getHours() < 10){
        youTime.hours = `0${times.getHours()}`
    }
    if(times.getMinutes() < 10){
        youTime.minutes = `0${times.getMinutes()}`
    }
    if(times.getSeconds() < 10){
        youTime.seconds = `0${times.getSeconds()}`
    }
};

let clock = setInterval(()=>{
    if(flag == 1){
        var timeNow = new Date();
        youTime.hours = timeNow.getHours();
        youTime.minutes = timeNow.getMinutes();
        youTime.seconds = timeNow.getSeconds();
        normalTime(timeNow);
        clockHTML.textContent = `${youTime.hours} : ${youTime.minutes} : ${youTime.seconds}`
    }
    else{
        clearInterval(clock);
        clockHTML.textContent = null;
    }
}, 1000);

btnForClock.addEventListener('click', ()=>{
    if(flag == 0){
        flag = 1;
        clock = setInterval(()=>{
            if(flag == 1){
                var timeNow = new Date();
                youTime.hours = timeNow.getHours();
                youTime.minutes = timeNow.getMinutes();
                youTime.seconds = timeNow.getSeconds();
                normalTime(timeNow);
                clockHTML.textContent = `${youTime.hours} : ${youTime.minutes} : ${youTime.seconds}`
            }
            else{
                clearInterval(clock);
                clockHTML.textContent = null;
            }
        }, 1000);
        btnForClock.textContent = 'Delete';
    }
    else if(flag == 1){
        flag = 0;
        btnForClock.textContent = 'Create';
    }
});

inputForTimer.addEventListener('change', ()=>{
    if(inputForTimer.value > 0){
        setTimeout(()=>{
            alert('Время Вышло!');
        }, (inputForTimer.value) * 1000 );
        setInterval(()=>{
            
        },1000)
    }
}) 


