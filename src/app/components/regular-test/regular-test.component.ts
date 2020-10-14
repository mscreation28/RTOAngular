import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-regular-test',
	templateUrl: './regular-test.component.html',
	styleUrls: ['./regular-test.component.css']
})

export class RegularTestComponent implements OnInit {

	public psec : string = null;
	public tsec : string = null;
	interval: any;
	sec: number = null;	
	public dummy=[ { 'id':1, 'time':35	} ]
	
	constructor() { 
		this.psec="45"
		this.tsec="100"		
	}
	ngOnInit(): void {
		this.sec = 45;
		this.start();
	}
	timer()	
	{				
		if(this.sec!=0) {
			this.sec--;    
		}
		this.psec = (this.sec<10?("0"+this.sec):(this.sec+""));
		this.tsec=(100*this.sec)/46+"";
		if(this.sec==0) {
			document.getElementById('this.sec').innerHTML = "00";        
			clearInterval(this.interval);  
			document.getElementById('submitbtn').click();
		}
		var cir = document.getElementById('circle');
						
	}
	start()
	{
		this.interval = setInterval(() => { this.timer() }, 1000);
	}
	
}
