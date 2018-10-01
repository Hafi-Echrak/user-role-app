import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable()
export class OnlyAdminGuard implements CanActivate { 
  constructor(private authService:AuthenticationService,private router:Router) {}; 

  canActivate() {
    console.log("onlyadmin");
    if (this.authService.isAdmin()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      this.router.navigateByUrl('/login');
      
      return false;
    }
  }
}