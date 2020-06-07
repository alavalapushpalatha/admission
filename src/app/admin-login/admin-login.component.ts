import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/Login';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private service: CapService, private router: Router) { }
  message;

  login: Login = new Login();
  ngOnInit(): void {
  }
  onSubmit(userForm) {
    this.service.login(this.login).subscribe((data: boolean) => {
      if (data) {
        sessionStorage.setItem('username', this.login.mobNum + "");
        sessionStorage.setItem('userType', 'Admin');

        this.router.navigate(['/adminHome']);
      }
      else {
this.message="Invalid Credentials!";      }
    },
      error => console.log(error)
    );

  }
}
