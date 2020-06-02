import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  status:Boolean;
  message:string;
  constructor(private capService:CapService,private router:Router) { }
  onSubmit(resetPasswordForm:any){
    
      this.capService.passwordReset(resetPasswordForm).subscribe((data:any)=>{
        this.status=data;
        if(this.status)
          {
            this.message="Valid user";
              
          }
        else{
          this.message="InValid user";
        }
      });
    }
  

 

  ngOnInit(): void {
  }
 

}
