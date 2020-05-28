import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICollege } from './Interfaces/college';

@Injectable({
  providedIn: 'root'
})
export class CapService {

 
  private collegeList:ICollege[]=[

    {
      collegeId:"1",
      collegeName:"Anurag",
      address:"Venkatapur",
      location:"OU",
      city:"Hyderabad",
      contactNumber:"123456789",
      departments:[
        {
          name:"IT", 
          cutoff:345
          },
          {
            name:"ECE",
           cutoff:3223
          },
          {
            name:"EEE",
           cutoff:2231
          },
          {
            name:"CIVIL",
           cutoff:211
          },
          {
            name:"MECH",
           cutoff:4558
          }
      ]
    },
    {
      collegeId:"2",
      collegeName:"fdf",
      address:"eew",
      location:"ewdscn",
      city:"wdsfcbvn",
      contactNumber:"awsedgr",
      departments:[
        {
        name:"IT", 
        cutoff:345
        },
        {
          name:"ECE",
         cutoff:98889
        },
        {
          name:"EEE",
         cutoff:400
        },
        {
          name:"CSE",
         cutoff:50
        },
        {
          name:"MECH",
         cutoff:4558
        }
    ]
    }
   ]
   ;
  
    constructor(private http: HttpClient) { }

  create(collegeObj:ICollege) : Observable<string>{ 
    console.log(collegeObj);
   return this.http.post<string>('http://localhost:50520  URL', collegeObj).pipe(catchError(this.errorHandler));
  }

  update(collegeObj:ICollege,collegeId) : Observable<string>{ 
    console.log(collegeObj.departments,collegeId);
    return this.http.post<string>('http://localhost:50520  URL', collegeObj).pipe(catchError(this.errorHandler));
  }


  getCollegesList(): ICollege[]{
    
    return this.collegeList;
  }

  getCollgeById(id): ICollege{
    let college: ICollege;
    for (let i =0; i< this.collegeList.length;++i){
      if(id==this.collegeList[i].collegeId){
        college= this.collegeList[i];
        i= this.collegeList.length;
      }  
    }
    return college;

   //  return URL for Backend 
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
