import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrole',
  templateUrl: './newrole.component.html',
  styleUrls: ['./newrole.component.css']
})
  
  
export class NewroleComponent implements OnInit {
mode:number;
  role;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }
  
  onSaveRole(role){
    
     this.authService.saveRole(role)
     .subscribe(resp=>{
        this.role=resp;
       this.mode==2
       
     },err=>{
       this.mode=0;
     })
  }

}
