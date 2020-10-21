import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { param } from 'jquery';
import { UserDetails } from './components/signup/UserDetails';

export const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type': 'application/json'
	})
}

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
	RegisterUser(data:UserDetails): Observable<any> {
		return this.http.post('http://localhost:3000/register/',JSON.stringify(data),httpOptions);
		// return this.http.post('https://rtoexam.herokuapp.com/getrandomNquestion',JSON.stringify(data),httpOptions);
	}
	getLoginData(): Observable<any> {
		return this.http.get('http://localhost:3000/loginusers')
	}
}
