import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

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
	public ques: any=[];
	public qnpr: number;
	numbers: any;
	selectedOption:any ="";
	i:number;
	public selectionList:any=[];

	constructor(private router : Router,private services : DataserviceService) { 
		this.psec="45"
		this.tsec="100"		
	}
	ngOnInit(): void {
		if(parseInt(localStorage.getItem("seconds"))>0 && localStorage.getItem("ques").length>0 && localStorage.getItem("selectionList").length>0){
			console.log("eglpe"+localStorage.getItem("ques"));
			this.sec = parseInt(localStorage.getItem("seconds"));
			this.qnpr = parseInt(localStorage.getItem("qnpr"));			
			this.ques = JSON.parse(localStorage.getItem("ques"));
			this.selectionList = JSON.parse(localStorage.getItem("selectionList"));
			this.timer();			
			this.start();
						
		}
		else{
			this.sec = 45;
			this.services.getRandomQue().subscribe( res => {
				this.ques=res;
				console.log(res);
				this.services.questions=res;
				console.log(this.services.questions);
				localStorage.setItem("ques",JSON.stringify(res));
				localStorage.setItem("quespassed","");
				localStorage.setItem("selectionList","");
				console.log(JSON.parse(localStorage.getItem("ques")));
			})			
			console.log("good start");
			clearInterval(this.interval);
			this.start();
			this.qnpr=0;
		}
	}
	settimer():void {
		this.sec=45;
	}
	timer()	
	{				
		if(this.sec!=0) {
			this.sec--;    
		}
		localStorage.setItem("seconds",this.sec.toString());
		this.psec = (this.sec<10?("0"+this.sec):(this.sec+""));
		this.tsec=(100*this.sec)/46+"";
		// console.log(this.sec);
		if(this.sec==0) {			
			console.log(this.sec+"Hello End");
			// this.ngOnInit();			
			this.AnswerQue();
		}						
	}
	start()
	{				
		this.interval = setInterval(() => { this.timer() }, 1000);
	}
	
	AnswerQue()
	{	
		// console.log(qid,this.selectedOption);		
		if((this.ques[this.qnpr].ans==1 && this.selectedOption==this.ques[this.qnpr].op1) || (this.ques[this.qnpr].ans==2 && this.selectedOption==this.ques[this.qnpr].op2) || (this.ques[this.qnpr].ans==0 && this.selectedOption==this.ques[this.qnpr].op3))
			this.selectionList[this.qnpr]={'option': this.selectedOption, 'correct':true};
		else
			this.selectionList[this.qnpr]={'option': this.selectedOption, 'correct':false};
		this.services.selections = JSON.stringify(this.selectionList);
		localStorage.setItem("selectionList",JSON.stringify(this.selectionList));
		localStorage.setItem("quespassed",JSON.stringify(this.ques));
		this.qnpr++;
		this.settimer();	
		localStorage.setItem("seconds",this.sec.toString());				
		localStorage.setItem("qnpr",this.qnpr.toString());
		this.selectedOption="";
		if(this.qnpr==15)
		{
			clearInterval(this.interval);  
			this.end();			
			this.router.navigate(['/result']);		
			
		}
		else{
			// this.start();
		}
	}
	end(){
		localStorage.setItem("ques","");
		localStorage.setItem("qnpr","0");
		localStorage.setItem("seconds","0");
		clearInterval(this.interval);  
		console.log("haa me yaha hu")
	}
	Restartonfail(){
		this.end();
		console.log("tyring restart/..");
		this.ngOnInit();
	}

	onSelect(que :any, event:any){
		console.log(que);
		this.selectedOption=event.target.value;
	}
}
