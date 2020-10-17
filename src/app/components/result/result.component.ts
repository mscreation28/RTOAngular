import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['../../components/regular-test/regular-test.component.css','./result.component.css']
})
export class ResultComponent implements OnInit {

	fetchedQue:any=[];
	fetchedSelection:any=[]
	check:boolean = true;
	truecnt:number = 0;
	falsecnt:number = 0;
	constructor(private services: DataserviceService) { }

	ngOnInit(): void {		
		this.fetchedQue = this.services.questions;
		if(this.services.questions.legth>0 && this.services.selections.legth>0)
		{
			this.fetchedQue = this.services.questions;	
			console.log(this.fetchedQue);
			this.fetchedSelection = JSON.parse(this.services.selections);
			console.log(this.fetchedSelection);
		}
		else if(localStorage.getItem("quespassed") != "" && localStorage.getItem("selectionList") != "")
		{
			this.fetchedQue = JSON.parse(localStorage.getItem("quespassed"));
			this.fetchedSelection = JSON.parse(localStorage.getItem("selectionList"));
			console.log(this.fetchedSelection);
		}
		for(var q of this.fetchedSelection)
		{
			if(q.correct==true)
				this.truecnt++;
			else
				this.falsecnt++;
		}
	}

}
