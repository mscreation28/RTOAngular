import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataserviceService } from 'src/app/dataservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	public alert : string="";
	user:any = [];	
	public temp:string=""
	constructor(private formBuilder: FormBuilder, private service : DataserviceService, private router: Router) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({			
			email: [null],
			password: [null],			
		  });
		this.service.getLoginData().subscribe(res => {
			this.user=res;
			// console.log(res);			
		})		
	}

	onSubmit(){	
		this.service.getLoginData().subscribe(res => {
			this.user=res;
			// console.log(res);			
		})	
		if(this.form.controls.email.value != null && this.form.controls.password.value != null)
		{        
			this.alert="";
			console.log(this.form.controls.email.value);
			console.log(this.form.controls.password.value);
			console.log(this.user);
			for(var u of this.user)
			{
				if(this.form.controls.email.value==u.email && this.form.controls.password.value==u.password)
				{
					this.alert="";
					this.router.navigate(['/home'])
				}
				else
					this.alert="Invalid Login Details..!";
			}
			return true;		
		}
		else
		{
			this.alert="Value can not be Empty..!";
			// return false;			
		}
	}
}
