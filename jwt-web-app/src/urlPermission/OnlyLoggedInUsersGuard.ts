import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private authService:AuthenticationService,private router:Router) {}; 

  canActivate() {
    
    if (this.authService.isLoggedIn()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      this.router.navigateByUrl('/login');
      
      return false;
    }
  }
}