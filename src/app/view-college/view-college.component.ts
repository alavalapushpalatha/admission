import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';
import { ICollege } from '../Model/college';
import { College } from '../Model/Colleges';

@Component({
  selector: 'app-view-college',
  templateUrl: './view-college.component.html',
  styleUrls: ['./view-college.component.css']
})
export class ViewCollegeComponent implements OnInit {
page=1;
  title:string = "Colleges List";
  search:any;
  // CollegesList:ICollege[];
  samples:College[]=[];
  CollegesList:College[]=[];
  Location:any=["Hyderabad","Warangal"];
  constructor(private service: CapService,private router: Router) { }

  ngOnInit( ): void {
   this.service.viewColleges().subscribe(data=>this.CollegesList=data);

  }

  deleteCollege(college:College,i){
    // this.CollegesList.splice(i,1);
    console.log(college)
    if(confirm('Are sure you want to delete College')){
      this.service.deleteCollege(college.collegeCode).subscribe(data=>data);
      window.location.reload();
      alert("College Deleted Successfully");
      }
      this.router.navigate(['viewCollege']);
  }
  

  updateCollege(clg){
  //  window.localStorage.setItem("collegeId", clg.collegeId.toString());
  this.service.setCollegeToUpdate(clg);
    this.router.navigate(['updateCollege']);
  }

  searchByLocation(event){
    console.log(event.target.value)
  }

  idSort(){
    console.log("sort is called");
    this.CollegesList=this.CollegesList.sort(function(a,b){
      return a.collegeCode.localeCompare(b.collegeCode)
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
        return a.state.localeCompare(b.state)
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
