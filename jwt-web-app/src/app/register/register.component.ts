import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  user:any;
  mode:number=1;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  
  onRegister(user){
    this.authService.saveUser(user)
     .subscribe(resp=>{
        this.user=resp;
       this.mode==2
       
     },err=>{
       this.mode=0;
     })

  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}