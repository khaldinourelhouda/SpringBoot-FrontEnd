import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { AuthGuard } from './auth.guard';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { ProfileComponent } from './profile/profile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

export const appRoutes: Routes = [

  

    {
        path: 'home' , 
        component: HomeComponent 
    },
    {
        path: 'login' , 
        component: LoginComponent 
    },
    {
        path: 'signup' , 
        component: SignupComponent 
    },
    {
        path: 'admindashbord' , 
        component: AdmindashbordComponent ,canActivate:[AuthGuard]
    },
    {
        path: 'userdashbord' , 
        component: UserdashbordComponent ,canActivate:[AuthGuard]
    },
    {
        path: 'profile' , 
        component: ProfileComponent ,canActivate:[AuthGuard]
    },
    {
        path: 'edituser/:id' , 
        component: EdituserComponent ,canActivate:[AuthGuard]
    },
    {
        path: 'delete/:id' , 
        component: DeleteuserComponent ,canActivate:[AuthGuard]
    },
    
    {
        path:'' ,
        redirectTo:'/signup' , 
        pathMatch:'full'}
];

@NgModule ({
    imports:[
        RouterModule.forRoot(
            appRoutes,
            {enableTracing:true}
        )
    ],
    exports:[RouterModule],
    providers:[]

})
export class AppRoutingModule{

}