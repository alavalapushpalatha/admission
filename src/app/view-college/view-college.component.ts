import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';
import { ICollege } from '../Model/college';

@Component({
  selector: 'app-view-college',
  templateUrl: './view-college.component.html',
  styleUrls: ['./view-college.component.css']
})
export class ViewCollegeComponent implements OnInit {

  title:string = "Colleges List";
  search:any;
  CollegesList:ICollege[];
  Location:any=["Hyderabad","Warangal"];
  constructor(private service: CapService,private router: Router) { }

  ngOnInit( ): void {
    this.CollegesList= this.service.getCollegesList();
    
    //.subscribe(data=> this.CollegesList=data);
  }

  deleteCollege(i){
    this.CollegesList.splice(i,1);
    alert("Deleted");
  }
  

  updateCollege(clg){
   window.localStorage.setItem("collegeId", clg.collegeId.toString());
    this.router.navigate(['update']);
  }

  searchByLocation(event){
    console.log(event.target.value)
  }

  idSort(){
    console.log("sort is called");
    this.CollegesList=this.CollegesList.sort(function(a,b){
      return a.collegeId.localeCompare(b.collegeId)
      })
  }
  
  nameSort(){
    console.log("sort is called");
      this.CollegesList=this.CollegesList.sort(function(a,b){
        return a.collegeName.localeCompare(b.collegeName);
      })
  }
  
  
  addressSort(){
    console.log("sort is called");
      this.CollegesList=this.CollegesList.sort(function(a,b){
        return a.address.localeCompare(b.address)
      })
  }

  locationSort(){
    console.log("sort is called");
      this.CollegesList=this.CollegesList.sort(function(a,b){
        return a.location.localeCompare(b.location)
      })
  }

  citySort(){
    console.log("sort is called");
      this.CollegesList=this.CollegesList.sort(function(a,b){
        return a.city.localeCompare(b.city)
      })
  }

  contactSort(){
    console.log("sort is called");
      this.CollegesList=this.CollegesList.sort(function(a,b){
        return a.contactNumber.localeCompare(b.contactNumber)
      })
  }

}
