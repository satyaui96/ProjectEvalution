import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginCheck:any=false;
  loginHeader: boolean;
  title = 'projectsample';
  ngOnInit(): void {
   
   this.loginCheck= sessionStorage.getItem('isLoggedIn');
   if(this.loginCheck === "true"){
this.loginHeader=true;
   }else{
    this.loginHeader=false;
   }
  }
}
