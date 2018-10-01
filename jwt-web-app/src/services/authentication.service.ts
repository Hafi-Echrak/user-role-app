


import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
@Injectable()
export class AuthenticationService{
  
  
  private host:string="http://localhost:8080";
  private jwtToken=null;
  private roles:Array<any>;

  constructor(private http:HttpClient){
    
  }

  login(user) {
    
      var headers = new HttpHeaders();
headers.append('Content-Type',  'text/plain');
    return this.http.post(this.host + "/login", user,{observe:'response',headers:headers});
  }
  
  
  
  saveToken(jwt:string){
  this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper= new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    
  }
  
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }
  
  
  getUsers(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/users",{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  
  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }
  
  
  
    isAdmin(){
    
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
    
    
  }
  
   saveUser(user){

    return this.http.post(this.host+"/register",user,{headers:new HttpHeaders({'authorization':this.jwtToken})});
    
    
  }
  
  
    
  getRoles(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/roles",{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  
  
  saveRole(role){
     return this.http.post(this.host+"/addrole",role,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  
  
  isLoggedIn(){
   
    this.loadToken();
  if(this.jwtToken==null)
  {    return false;}
  else { return true;}
    
  }
  
  deleteRole(id:number){
     return this.http.delete(this.host+"/deleterole/"+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
    
  }
  
  
  findItemById(id:number){
      return this.http.get(this.host+"/role/"+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
    
  }
  
  getRights(id:number){
    
      if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/rights/"+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  getAllRights(){
         if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/rights",{headers:new HttpHeaders({'authorization':this.jwtToken})});
    
  }
  
}