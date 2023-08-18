let WTime;
let First_Time;
let FirstDate;

setInterval(()=> {

    
    WTime = new Date();
    FirstDate = WTime.toLocaleDateString();
    First_Time = WTime.getHours() + ':' + WTime.getMinutes() + ':' + WTime.getSeconds();
    
    document.getElementById('SpanTime').innerHTML = First_Time + " On " + FirstDate;
}, 1000)