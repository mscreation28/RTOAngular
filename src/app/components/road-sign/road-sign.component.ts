import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-road-sign',
  templateUrl: './road-sign.component.html',
  styleUrls: ['./road-sign.component.css']
})
export class RoadSignComponent implements OnInit {

  jsondata:any=[];
  constructor(private service: DataserviceService) {
    this.service.getRoadSign().subscribe(res => {
			this.jsondata=res;
			console.log(res);
		})
   }

  ngOnInit(): void {
  }

  changetoguj():void {
		
	}
}
