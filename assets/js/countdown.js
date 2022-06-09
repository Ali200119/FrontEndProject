let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let currentYear = new Date().getFullYear();

    let endTime = new Date (`June 26 ${currentYear} 00:00:00`)

    function updateCountdownTime(){
        let currentTime = new Date();
        let diff = endTime-currentTime;
        let day = Math.floor(diff/1000/60/60/24);
        let hour = Math.floor(diff/1000/60/60)%24;
        let min = Math.floor(diff/1000/60)%60;
        let sec = Math.floor(diff/1000)%60;
        days.innerHTML=day<10 ? `0` + day:day
        hours.innerHTML=hour<10 ? `0` + hour:hour
        minutes.innerHTML=min<10 ? `0` + min:min
        seconds.innerHTML=sec<10 ? `0` + sec:sec
    }
    setInterval(updateCountdownTime,1000)