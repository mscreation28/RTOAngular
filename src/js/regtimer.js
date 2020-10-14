var sec = 45;
// require('circle-progress.js');
// var $ = require('jquery');

function timer(){
    if(sec!=0) {
        sec--;    
    }
    document.getElementById("sec").innerHTML = (sec<10?("0"+sec):sec);
    if(sec==0) {
        document.getElementById('sec').innerHTML = "00";        
        clearInterval(timer)     
        document.getElementById('submitbtn').click();
    }
    var cir = document.getElementById('circle');
    
    $(cir).circleProgress({
        value: (sec)/45,
        size: 75,        
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
// var progressBarOptions = {
// 	startAngle: -1.55,
// 	size: 200,
//     value: 0.75,
//     fill: {
// 		color: '#ffa500'
// 	}
// }

// $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
// 	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
// });

var x = setInterval(timer,1000);