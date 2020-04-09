import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../shared/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  selectedUser :User;
  user:User;
  userForm:FormGroup;
  constructor(private userService:UserService,private router:Router,private fb:FormBuilder,private route:ActivatedRoute) { 
  
  }
  
  ngOnInit() {
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.userService.getOneDepart(id).subscribe(
      data => {this.selectedUser = data; 
      console.log(this.selectedUser)}
    )
  }

  
  updateUser(){
    this.userService.updateUser(this.selectedUser)
    .subscribe(
      data => {this.user = data; console.log(this.user)
        
        this.router.navigate(['admindashbord']);
      }
    );}

}
