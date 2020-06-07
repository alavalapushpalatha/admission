import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { College } from '../Model/Colleges';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-predicted-colleges',
  templateUrl: './predicted-colleges.component.html',
  styleUrls: ['./predicted-colleges.component.css']
})
export class PredictedCollegesComponent implements OnInit {
  samples:College[]=[];
  selectedBranch:string;
  contact:string;
  a:boolean=true;
  b:boolean=false;
  c:boolean=true;

  newcontact: number;
  constructor(private service:CapService,private router:Router) { }
 
  ngOnInit(): void {
    this.contact= localStorage.getItem("mobile");
    this.newcontact=parseInt(this.contact);
    this.service.viewCollegesOnMarks(this.newcontact).subscribe((data:any)=>{
      console.log(data);
      this.samples=data;
    })
  }
 
selectBranch(branch){  
  
  console.log(this.selectedBranch)
  this.contact= localStorage.getItem("mobile");
  console.log(this.contact);
  this.b=true;
  this.c=false;
  this.service.viewpredictedColleges(this.contact,this.selectedBranch).subscribe((data:any)=>{
    console.log(data);
   
    this.samples=data;
  })
}
 
}