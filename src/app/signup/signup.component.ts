import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selectedUser:User;
userForm:FormGroup;

  constructor(private userService:UserService,private fb:FormBuilder,private authService:LoginAuthService) { 
    this.authService.isLoggedIn();
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.userForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:'',
      email:'',
      password:'',
      phoneNumber:'',
      role:'',
    });
   }

  saveUser(){
    const user = this.userForm.value;
    user.enabled=true;
    this.userService.SaveUser(user).subscribe(
      res =>{
        if(res){
          console.log(res);
          this.userForm.reset();
          
        }
       
      }
    );
  }

 

}
