import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapService } from '../cap.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  status:Boolean;
  message:string;
  constructor(private capService:CapService,private router:Router) { }
  
  onSubmit(registationForm:any){
    
  
  
      this.capService.register(registationForm).subscribe((data:Boolean)=>{
        this.status=data;
        if(this.status){
        /*   this.router.navigate(['/home']); */
        console.log(this.status);
        this.message="Registered Successfully..."
        }
        else{
          this.message="User is alredy existing"
          console.log(this.status);

        }
      });
  

   
  }
 

  ngOnInit(): void {
  }

}
