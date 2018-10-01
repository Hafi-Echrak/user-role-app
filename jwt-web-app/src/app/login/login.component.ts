import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient,  HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode:number=0;
  
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  
  onLogin(user){
    
    
    
  this.authService.login(user)
    .subscribe(resp=>{
      let jwt=resp.headers.get('authorization');
     // console.log(resp.headers.get('authorization'));
      this.authService.saveToken(jwt);
      this.router.navigateByUrl('/profile')
 },err=>{
      this.mode=1;
    }
    )
  }

 // showVar: boolean = true;
//toggleChild(){
//this.showVar = !this.showVar;
 //}
  
  
  
  
  
  
  
}
