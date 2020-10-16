import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
	qbtnClick(){
		this.router.navigate(['/qbook']);
  }
  rbtnClick(){
    this.router.navigate(['/roadsign']);
  }
  rtbtnClick(){
    this.router.navigate(['/regulartest']);
  }
  ctbtnClick(){
    this.router.navigate(['/customtest']);
  }
}
