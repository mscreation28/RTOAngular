import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { param } from 'jquery';

@Injectable({
	providedIn: 'root'	
})
export class DataserviceService {

	public questions: any=[];
	public selections: any=[];
	constructor( private http: HttpClient) { }

	getQuestion(): Observable<any> {
		// return this.http.get('http://localhost:3000/getquestion')
		return this.http.get('https://rtoexam.herokuapp.com/getquestion')
	}
	getGujQuestion(): Observable<any> {		
		// return this.http.get('http://localhost:3000/getquestionGuj')
		return this.http.get('https://rtoexam.herokuapp.com/getquestionGuj')
	}
	getRoadSign(): Observable<any> {
		// return this.http.get('http://localhost:3000/getroadsign')
		return this.http.get('https://rtoexam.herokuapp.com/getroadsign')
	}
	getRandomQue(): Observable<any> {
		// return this.http.get('http://localhost:3000/getrandomquestion')
		return this.http.get('https://rtoexam.herokuapp.com/getrandomquestion')
	}
	getRandomNQue(questioncnt): Observable<any> {		
		// return this.http.get('http://localhost:3000/getrandomNquestion',{params:{qcnt:questioncnt}});
		return this.http.get('https://rtoexam.herokuapp.com/getrandomNquestion',{params:{qcnt:questioncnt}})
	}
}
