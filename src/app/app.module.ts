import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './login/login.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';

import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { AuthGuard } from './auth.guard';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { LoginAuthService } from './login-auth.service';
import { ProfileComponent } from './profile/profile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AdmindashbordComponent,
    UserdashbordComponent,
    ProfileComponent,
    EdituserComponent,
    DeleteuserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UserService,AuthGuard,LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
