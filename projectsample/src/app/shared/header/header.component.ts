import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginCheck:any=false;
  // loginHeader: boolean;
  @Input()  loginHeader;
  constructor(private router: Router,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
//     alert(this.loginHeader)
//    this.loginCheck= localStorage.getItem('isLoggedIn');
//    if(this.loginCheck === "true"){
// this.loginHeader=true;
//    }else{
//     this.loginHeader=false;
//    }
  }
  onSignout(){
    // this.router.navigateByUrl('/home');
    localStorage.setItem('isLoggedIn', 'false');
    this.refreshPage();
    this.router.navigateByUrl('/home');
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
}
