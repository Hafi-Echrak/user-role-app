import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
roles;
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
    
      this.authService.getRoles()
      .subscribe(data=>{
        this.roles=data;
      },err=>{
        this.authService.logout();
        this.router.navigateByUrl("/login");
  })

}
  
  
  doDelete(id:number){
    
   const item=this.authService.findItemById(id);
    let confirm=window.confirm('Are you sure ?');
    if(confirm==true){
    this.authService.deleteRole(id)
     .subscribe(data=>{
    
    
       
        this.roles.splice(this.roles.indexOf(item));
       console.log("suppression");
       
     },err=>{
       console.log(err);
     })
    
  }
  }
  
  
  
  getRights(id:number){
    this.router.navigate(['access',id]);
  }
  
  
}
















