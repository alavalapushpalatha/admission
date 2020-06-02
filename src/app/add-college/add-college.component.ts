import { Component, OnInit } from '@angular/core';
import { CapService } from '../cap.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { College } from '../Model/Colleges';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {
 college:College=new College();
  status: string;
  errorMsg: string;
  msg: string;
  showDiv: boolean = false;
  selectedDepartment:any=[];
  selectedDepartmentCutoff:any=[];
  departmentList=["CSE","EEE","ECE","IT","MECH","CIVIL"];
  departments= [{ name :"", cutoff :0},
  { name :"", cutoff :0},
  { name :"", cutoff :0},
  { name :"", cutoff :0},
  { name :"", cutoff :0},
  { name :"", cutoff :0}
];
//  departments:IDepartment[];

  constructor(private _collegeService: CapService, private router: Router) { }

  departmentChange(event){
    let index = this.selectedDepartment.indexOf(event.target.value);
    if(index==-1){
      this.selectedDepartment.push(event.target.value);
    }else{
      this.selectedDepartment.splice(index,1);
    }
  }

  cutoffChange(event){
    let index = this.selectedDepartment.indexOf(event.target.value);
    if(index==-1){
      console.log(this.college)
      this.selectedDepartmentCutoff.push(event.target.value);
    }else{
      console.log(this.college)

      this.selectedDepartmentCutoff.splice(index,1);
    }
  }

  // submitCreateForm(form: NgForm) {
  //   let ld=this.selectedDepartment.length;
  //   let i=0, empty = 6 - ld;
  //   for(;i<ld;++i){
  //     this.departments[i].name = this.selectedDepartment[i];
  //     this.departments[i].cutoff = this.selectedDepartmentCutoff[i];
  //   }
  //   this.departments.splice(ld,empty);
  //   var collegeObj:ICollege;
  //   this.showDiv=true;
  //   collegeObj={
  //     collegeId:form.value.collegeId,
  //     collegeName:form.value.collegeName,
  //     address:form.value.address,
  //     location:form.value.location,
  //     city:form.value.city,
  //     contactNumber:form.value.contactNumber,
  //     departments:this.departments
  //   };
  //   this._collegeService.create(collegeObj).subscribe(
  //     responseCreateStatus=>{
  //       this.status = responseCreateStatus;
  //       if(responseCreateStatus.toLocaleLowerCase()=="success"){
  //         console.log("Successfully created college");
  //         this.msg= "Successfully created college";
  //       }
  //     },
  //     responseCreateError => {
  //       this.errorMsg = responseCreateError;
  //     }
  //   );
  // }
  ngOnInit() {
  }


}
