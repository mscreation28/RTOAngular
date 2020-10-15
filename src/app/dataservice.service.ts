import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'	
})
export class DataserviceService {

	constructor( private http: HttpClient) { }

	getQuestion(): Observable<any> {
		return this.http.get('http://localhost:3000/viewdata')
	}
	getGujQuestion(): Observable<any> {
		return this.http.get('http://localhost:3000/viewdataGuj')
	}
	getRoadSign(): Observable<any> {
		return this.http.get('http://localhost:3000/viewroadsign')
	}
}
