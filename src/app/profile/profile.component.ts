import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  img1="./../assets/placeholder-profile-sq.jpg";
  currentUser: User;

  constructor() { 

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

  ngOnInit() {

   
   
  }

}
