import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'	
})
export class DataserviceService {

	public questions: any=[];
	public selections: any=[];
	constructor( private http: HttpClient) { }

	getQuestion(): Observable<any> {
		return this.http.get('http://localhost:3000/getquestion')
	}
	getGujQuestion(): Observable<any> {
		return this.http.get('http://localhost:3000/getquestionGuj')
	}
	getRoadSign(): Observable<any> {
		return this.http.get('http://localhost:3000/getroadsign')
	}
	getRandomQue(): Observable<any> {
		return this.http.get('http://localhost:3000/getrandomquestion')
	}
}
