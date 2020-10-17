import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';
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
	totsecfix: number = null;
	public ques: any=[];
	public selectionList:any=[];
	selectedOption:any ="";
	questioncnt:number =10;
	varcnt:number = this.questioncnt;
	public dummy=[ { 'id':1, 'time':0	} ]
	
	constructor(private router : Router, private services: DataserviceService) { 				
	}
	ngOnInit(): void {				
		this.settime(this.questioncnt);		
		this.services.getRandomNQue(this.questioncnt).subscribe( res => {
			this.ques=res;
			console.log(res);
			this.services.questions=res;
			console.log(this.services.questions);			
			localStorage.removeItem("quespassed");
			localStorage.removeItem("selectionList");			
		})			
		console.log("good start");		
		this.start();
		this.selectionList=[];
		for(var i=0;i<this.questioncnt;i++)
		{
			this.selectionList[i]={'option': "", 'correct':false};
		}		
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
		this.tsec1 = (this.totsec1*100)/(this.totsecfix)+"";
		// console.log(this.tsec1);
		if(this.sec==0 && this.min==0) {
			clearInterval(this.interval)  
			this.AnswerQuestion();
			// this.router.navigate(['/result']);
		}	
						
	}
	settime(questionCount:number)
	{
		this.tsec1='100';
		this.totsec1=questionCount*45;
		this.totsecfix=this.totsec1;
		this.min=Number.parseInt((this.totsec1/60)+"");
		this.sec=this.totsec1%60;
		this.ptime=this.min+":"+this.sec;
	}
	start()
	{
		this.interval = setInterval(() => { this.timer() }, 1000);
	}
	@HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
		let result = confirm("Changes you made may not be saved...!");
		if (result) {
		  console.log(event.target);
		}
		event.returnValue = false; // stay on same page
	}
	AnswerQuestion()
	{
		console.log("hello");		
		this.services.selections = JSON.stringify(this.selectionList);
		localStorage.setItem("selectionList",JSON.stringify(this.selectionList));
		localStorage.setItem("quespassed",JSON.stringify(this.ques));
		clearInterval(this.interval);			
		this.router.navigate(['/result']);
	}
	onSelect(quen :number, event:any){
		console.log("hello");
		this.selectedOption=event.target.value;
		console.log(this.selectionList);
		if((this.ques[quen].ans==1 && this.selectedOption==this.ques[quen].op1) || (this.ques[quen].ans==2 && this.selectedOption==this.ques[quen].op2) || (this.ques[quen].ans==0 && this.selectedOption==this.ques[quen].op3))
			this.selectionList[quen]={'option': this.selectedOption, 'correct':true};
		else
			this.selectionList[quen]={'option': this.selectedOption, 'correct':false};
	}
	Restartonfail()
	{
		console.log("Chalo ku6 dekhte hai..!");
		this.ngOnInit();
	}
	changeQuecount(){
		if(this.varcnt>200)
			this.varcnt=200;
		this.questioncnt=this.varcnt;
		console.log(this.questioncnt);
		this.ngOnInit();
	}
}
