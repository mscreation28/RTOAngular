import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
	selector: 'app-qbook',
	templateUrl: './qbook.component.html',
	styleUrls: ['./qbook.component.css']
})

export class QBookComponent implements OnInit {

	jsondata:any=[];
	isgujarati:boolean;
	page: number = 1;
	pnum:number=1;
  	
	constructor(private service: DataserviceService) {
		this.isgujarati=false;

	}

	ngOnInit(): void {
		if(this.isgujarati)	
			this.changetoguj();
		else
			this.changetoeng();
	}
	changetoguj():void {
		this.service.getGujQuestion().subscribe(res => {
			this.jsondata=res;
			console.log(res);
			this.isgujarati=true;
		})
	}
	changetoeng():void {
		this.service.getQuestion().subscribe(res => {
			this.jsondata=res;
			console.log(res);
			this.isgujarati=false;
		})
	}
	skiptopage():void {
		this.page=((this.pnum)+4)/5;
		console.log(this.page);
	}
}
	
