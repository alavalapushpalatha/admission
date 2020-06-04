import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CapService } from '../cap.service';
 
import { from } from 'rxjs';
import { College } from '../Model/Colleges';
 
@Component({
  selector: 'app-all-colleges',
  templateUrl: './all-colleges.component.html',
  styleUrls: ['./all-colleges.component.css']
})
export class AllCollegesComponent implements OnInit {
 
   
   
  samples:College[]=[];
 
  constructor(private service:CapService,private router:Router) { }
 
  ngOnInit(): void {
    this.service.viewColleges().subscribe((data:any)=>{
      console.log(data);
     
      this.samples=data;
    })
   
    
  }
 
}