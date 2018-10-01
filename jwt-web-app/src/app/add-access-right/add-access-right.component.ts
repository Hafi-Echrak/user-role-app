import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-access-right',
  templateUrl: './add-access-right.component.html',
  styleUrls: ['./add-access-right.component.css']
})
export class AddAccessRightComponent implements OnInit {

    @Input() showMePartially: boolean;
  rights;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
        
        this.authService.getAllRights()
      .subscribe(data=>{
        this.rights=data;
      },err=>{
        this.authService.logout();
        this.router.navigateByUrl("/login");
  })
  }

  
  
  saveRights(){
    
  }
 
 
}
