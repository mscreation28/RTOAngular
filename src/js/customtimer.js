var sec = 15;
var min = 2;
var tsec = min*60 + sec;
function timer(){
    if(sec!=0) {
        sec--;  
        tsec--;  
    }
    else {
        sec=59;
        min--; 
        tsec--;               
    }    
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = (sec<10?("0"+sec):sec);
    if(sec==0 && min==0) {
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        clearInterval(timer)     
        document.getElementById('submitbtn').click();
    }
    var cir = document.getElementById('circle');

    $(cir).circleProgress({
        value: (tsec)/135,
        size: 80,        
        thickness: 7, 
                       
        startAngle : (-Math.PI)/2,
        animation: {
            duration: 0
        },
        fill: {
            gradient: ["rgb(255, 238, 0)"]
        }
    }); 
}
var x = setInterval(timer,1000);