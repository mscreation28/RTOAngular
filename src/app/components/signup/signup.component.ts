import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';
import { UserDetails } from './UserDetails';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['../../components/login/login.component.css','./signup.component.css']
})

export class SignupComponent implements OnInit {
	
	form: FormGroup;
	public uname_alert : string="";
	public email_alert : string="";
	public password_alert : string="";
	public rpassword_alert : string="";
	data: UserDetails;

	constructor(private formBuilder: FormBuilder, private services: DataserviceService, private router: Router) { }
	
	ngOnInit(): void {
		this.form = this.formBuilder.group({
			name: [null],
			email: [null],
			password: [null],
			repassword: [null]		
		  });
	}	

	UnameValidate()
	{
		var uname = this.form.controls.name;
		// console.log("helo world");
		if(uname.value==null || uname.value==""){
			this.uname_alert = "Name Can not be Empty!";		
			return false; 
		}		
		this.uname_alert = "";
		return true;
	}

	EmailValidate()
	{
		var uemail = this.form.controls.email;
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
		console.log(uemail.value)
		if(uemail.value!=null)
		{
			if(uemail.value.toString().match(mailformat))
			{
				this.email_alert = "";
				return true;
			}
			else
			{
				this.email_alert = "Enter Valid Email Address!";			
				return false;
			}
		}
		else
		{
			this.email_alert = "Email Can not be Empty!";			
			return false;
		}
	}
	ValidationPassword()
	{
		var password = this.form.controls.password;    
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;

		if(password.value!=null)
		{
			if (!password.value.match(lowerCaseLetters))
			{
				this.password_alert = "Password should contain a LowerCase letter";
				return false;
			}		
			else if (!password.value.match(numbers))
			{
				this.password_alert = "Password should contain A Number";   			
				return false;
			}
			else if(password.value.length < 8)
			{
				this.password_alert = "Password should contain minimum 8 letters";   			
				return false;
			}
			else
			{
				this.password_alert = "";			
				return true;
			}
		}
		else{
			this.password_alert = "Password Can not be Empty!";   			
			return false;
		}
	}
	ValidationRPassword()
	{
		var password = this.form.controls.password;
		var rpassword = this.form.controls.repassword;		
		if(password.value!==rpassword.value)
		{
			this.rpassword_alert = "Both Password must be Same";   			
			return false;
		}
		this.rpassword_alert = "";		
		return true;
	}

	onSubmit(){		
		if(this.UnameValidate() && this.EmailValidate() &&  this.ValidationPassword() && this.ValidationRPassword())
		{        
			this.data = {
				"name": this.form.controls.name.value,				
				"email": this.form.controls.email.value,
				"password": this.form.controls.password.value
			}
			this.services.RegisterUser(this.data).subscribe(res => {})
			console.log(this.data);
			this.router.navigate(['/login']);
			return true;		
		}
		else
			return false;
	}
}
