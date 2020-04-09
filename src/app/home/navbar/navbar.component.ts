import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentstatus:any;

  constructor(private authService:LoginAuthService,private route:Router) { 

    this.currentstatus =this.authService.getStatus().subscribe(
      currentstatus => {
        this.currentstatus=currentstatus;
        console.log(currentstatus);
      }
    )
  }

  ngOnInit() {

  }

  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigateByUrl('/login');

  }

}
