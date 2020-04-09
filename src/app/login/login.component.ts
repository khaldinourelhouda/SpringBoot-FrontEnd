import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser:User;
  userForm:FormGroup;

  constructor(private userService:UserService ,private route:Router,private fb:FormBuilder,private authService:LoginAuthService) {
    this.authService.isLoggedIn();
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.userForm=this.fb.group({
    
      email:'',
      password:'',
     
    });
   }

  loginUser(){
    const user = this.userForm.value;
    user.enabled=true;
   
    this.userService.LoginUser(user).subscribe(
      res =>{
        if(res){
          if(res.token){
            localStorage.setItem('currentUser', JSON.stringify(res));
            
            if(res.user.role=='ADMIN'){
              console.log(res);
              this.route.navigateByUrl('/admindashbord');
            }
            else{
             
              this.route.navigateByUrl('/userdashbord');
            }
          }
          
        }
       
      }
    );

  }
}
