import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  usersDB:any= [  {userid : "12",password:"3","username":"tom"},{userid : "abc@media.com",password:"abc123","username":"tom"}, {userid : "def@media.com",password:"def123","username":"dick"}];
  errors:boolean=false;
  isSubmitted = false;
  errorOccured:boolean=false;
  errormessage:any;
  constructor(private fb: FormBuilder,private router :Router, @Inject(DOCUMENT) private _document: Document) { 
   
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
  
  const result = this.usersDB.find( ({ userid ,password }) => (userid === this.loginForm.get('userName').value) && (password === this.loginForm.get('password').value));
  console.log("result",result)
if(result !== undefined){
  console.log("login success");
  
  localStorage.setItem('isLoggedIn', 'true');
  this.router.navigate(['/home'])
  .then(() => {
    window.location.reload();
  });
 
    // setTimeout(() => this.router.navigate(['/home']), 5000);

 
}else {
  console.log("unsucces")
  this.errormessage="Username or Password is wrong ";
  localStorage.setItem('isLoggedIn', 'false');
  this.refreshPage();

}
}
refreshPage() {

  this._document.defaultView.location.reload();
 
}
reloadComponent() {
  let currentUrl = '/home';
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      this.refreshPage();
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
reloadCurrentRoute() {
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
}

}
