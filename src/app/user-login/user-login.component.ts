import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapService } from '../cap.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message:string;
  status:Boolean;
  constructor(private capService:CapService,private router:Router) { }
  onSubmit(loginForm:any){
    this.capService.loginUser(loginForm).subscribe((data:any)=>{
      this.status=data;
      if(this.status)
        {
          this.message="Valid user";
          this.router.navigate(['/userHome']);
  
  
        }
      else{
        this.message="Invalid UserName or password!!!";
      }
    });
  }
  


  ngOnInit(): void {
  }

}
