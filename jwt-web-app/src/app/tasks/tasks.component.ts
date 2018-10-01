import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  users;

  constructor(public authService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.authService.getUsers()
      .subscribe(data=>{
        this.users=data;
      },err=>{
        this.authService.logout();
        this.router.navigateByUrl("/login");
    
        
      })
  }


}
