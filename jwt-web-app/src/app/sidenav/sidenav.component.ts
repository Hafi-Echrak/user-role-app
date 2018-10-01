import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  motCle:string;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  
    onLogout(){
     this.authService.logout();
        this.router.navigateByUrl("/login");
  }
  
  chercher(){
    
  }
}
