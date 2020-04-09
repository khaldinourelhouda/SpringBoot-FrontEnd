import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { User } from '../shared/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashbord',
  templateUrl: './userdashbord.component.html',
  styleUrls: ['./userdashbord.component.css']
})
export class UserdashbordComponent implements OnInit {
  public loginuser:any={};
  public users : User [];

  constructor(private authService:LoginAuthService,private userService:UserService) { 

    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
 
    this.userService.getAllUsers(this.loginuser.token).subscribe(users =>{
      this.users=users;
    })
  }

}
