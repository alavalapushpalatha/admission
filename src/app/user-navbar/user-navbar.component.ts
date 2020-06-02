import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private service:CapService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout();
  }
}
