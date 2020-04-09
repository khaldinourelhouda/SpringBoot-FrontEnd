import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';
import { User } from '../shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {

  public loginuser:any={};
  public users : User [];
  userForm:FormGroup;
  selectedUser :User;
  opreration:string='add';

  constructor(private authService:LoginAuthService ,private userService:UserService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { 

    this.authService.isLoggedIn();
    this.loginuser =JSON.parse(localStorage.getItem('currentUser'));
    //this.createForm();
  }

  ngOnInit() {
   this.loadUser();
   
  }

  loadUser(){
    this.userService.getAllUsers(this.loginuser.token).subscribe(users =>{
      
      this.users=users;
      
    })
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

   updateUser(event){
   
    let id: number;
    id = event;
    console.log(id)
   this.router.navigate(['edituser/'+id])
   
  }

  delete(id){
    this.router.navigate(['delete/'+id])
  
   
      } 

}
