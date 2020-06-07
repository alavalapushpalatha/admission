import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent implements OnInit {

  status:Boolean;
message:String;
message1:String;
  constructor(private capService:CapService) { }
  onSubmit(feedbackForm:any){
    this.capService.giveFeedback(feedbackForm,this.message1).subscribe((data:Boolean)=>{
      this.status=data;
      if(this.status){
      console.log(this.status);
      alert("Feedback submitted Successfully...");
      }
     
    });
}
sayFeedback(msg){
  this.message1=msg;
  console.log(this.message1)
}

  ngOnInit(): void {
  }

}
