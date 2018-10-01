import { AuthenticationService } from "../services/authentication.service";
import { OnlyAdminGuard } from "../urlPermission/OnlyAdminGuard";
import { OnlyLoggedInUsersGuard } from "../urlPermission/OnlyLoggedInUsersGuard";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { SidenavComponent } from './sidenav/sidenav.component';
import { RolesComponent } from './roles/roles.component';
import { ProfileComponent } from './profile/profile.component';
import { NewroleComponent } from './newrole/newrole.component';
import { AccessrightComponent } from './accessright/accessright.component';
import { ChildComponent } from './child/child.component';
import { AddAccessRightComponent } from './add-access-right/add-access-right.component';





const appRoutes:Routes=[

{path:"login",component:LoginComponent},
{path:"access/:id",component:AccessrightComponent,canActivate: [OnlyLoggedInUsersGuard, OnlyAdminGuard]},

  {path:"users",component:TasksComponent,canActivate: [OnlyLoggedInUsersGuard]},
  {path:"newtask",component:NewTaskComponent,canActivate: [OnlyLoggedInUsersGuard]},
  {path:"register",component:RegisterComponent,canActivate: [OnlyLoggedInUsersGuard, OnlyAdminGuard]},
  {path:"roles",component:RolesComponent,canActivate: [OnlyLoggedInUsersGuard]},
  {path:"profile",component:ProfileComponent,canActivate: [OnlyLoggedInUsersGuard]},
    {path:"newrole",component:NewroleComponent,canActivate: [OnlyLoggedInUsersGuard, OnlyAdminGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    NewTaskComponent,
    SidenavComponent,
    RolesComponent,
    ProfileComponent,
    NewroleComponent,
    AccessrightComponent,
    ChildComponent,
    AddAccessRightComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [AuthenticationService, OnlyLoggedInUsersGuard, OnlyAdminGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
