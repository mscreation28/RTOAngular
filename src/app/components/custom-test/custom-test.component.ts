import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegularTestComponent } from '../../components/regular-test/regular-test.component';

@Component({
	selector: 'app-custom-test',
	templateUrl: './custom-test.component.html',
	styleUrls: 
	['../../components/regular-test/regular-test.component.css','./custom-test.component.css']
})
export class CustomTestComponent implements OnInit {

	public ptime : string = null;
	public tsec1 : string = null;
	interval: any;
	sec: number = null;	
	min: number = null;
	totsec1: number = null;
	public dummy=[ { 'id':1, 'time':45	} ]
	
	constructor(private router : Router) { 
		this.ptime="2:15";
		this.tsec1="100";
	}
	ngOnInit(): void {
		this.sec = 15;
		this.min = 2;
		this.totsec1 = 135;
		this.start();
	}
	timer()	
	{				
		if(this.sec!=0) {
			this.sec--;  
			this.totsec1--;  
		}
		else {
			this.sec=59;
			this.min--; 
			this.totsec1--;               
		}    
		this.ptime = this.min+":";
		this.ptime += (this.sec<10?("0"+this.sec):this.sec);
		this.tsec1 = (this.totsec1*100)/135+"";
		// console.log(this.tsec1);
		if(this.sec==0 && this.min==0) {
			clearInterval(this.interval)     
			this.router.navigate(['/result']);
		}	
						
	}
	start()
	{
		this.interval = setInterval(() => { this.timer() }, 1000);
	}

}
