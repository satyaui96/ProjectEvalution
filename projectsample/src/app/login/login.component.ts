import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  usersDB:any= [ {userid : "abc@media.com",password:"abc123","username":"tom"}, {userid : "def@media.com",password:"def123","username":"dick"}];
  errors:boolean=false;
  isSubmitted = false;
  errorOccured:boolean=false;
  errormessage:any;
  constructor(private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password: ['', 
      Validators.required],
    }
    );
    
  }
  get name() { return this.loginForm.get('userName'); }

get power() { return this.loginForm.get('password'); }

onlogin(){
if(this.loginForm.valid){

  this.usersDB.forEach((element) => {
    this.usersDB.find((ele) => {
      if (element.userid === this.loginForm.get('userName').value &&  element.password === this.loginForm.get('password').value) {
       console.log("login success");

      }
      else{
        // this.loginForm.
        console.log("unsucees");
        this.errors=true;
        this.errorOccured=true;
        this.errormessage="Username or Password is wrong ";
      }
    });
  });
}
else{
 this.checkValid('userName','required');
 this.checkValid('password','required')
}

}
checkValid(componentName: string, errorType: null | string = null): ValidationErrors | boolean {
  let component: any;
 
    component = this.loginForm.get(componentName);
 
  const valid = component.valid;
  const touched = component.touched;
  const isSubmitted = this.isSubmitted;
  const defaultValidator = !valid && (touched || isSubmitted);
  if (!errorType) {
    return defaultValidator;
  }
  if (component.errors && component.errors.hasOwnProperty(errorType)) {
    return defaultValidator && component.errors[errorType];
  }
  return false;
}

}
