import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  selectedUser :User;
  user:User;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.userService.getOneDepart(id).subscribe(
      data => {this.selectedUser = data; 
      console.log(this.selectedUser)}
    )
  }

 
  deleteDepart(){
  
        const id = this.route.snapshot.params['id']
    this.userService.deleteUser(id)
    .subscribe(
      data => {this.user = data; console.log(this.user)
       
        this.router.navigate(['admindashbord']);
      }
    )
      
  }

  
}
