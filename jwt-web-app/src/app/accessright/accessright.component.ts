import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-accessright',
  templateUrl: './accessright.component.html',
  styleUrls: ['./accessright.component.css']
})
export class AccessrightComponent implements OnInit {
id:number;
  rights;

constructor(public activatedRoute: ActivatedRoute,public authService:AuthenticationService, public router:Router) {
  this.id= activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    
        this.authService.getRights(this.id)
      .subscribe(data=>{
        this.rights=data;
      },err=>{
        this.authService.logout();
        this.router.navigateByUrl("/login");
  })
  }
  
  showVar: boolean = false;
toggleChild(){
this.showVar = !this.showVar;
 }

}
