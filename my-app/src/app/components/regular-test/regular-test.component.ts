import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	
	constructor(private router : Router) { 
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
		console.log(this.sec);
		if(this.sec==0) {			
			console.log(this.sec+"Hello End");
			clearInterval(this.interval);  
			this.router.navigate(['/result']);
		}						
	}
	start()
	{
		this.interval = setInterval(() => { this.timer() }, 1000);
	}
	
}
