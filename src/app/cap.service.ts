import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from './Model/Login';
import { Router } from '@angular/router';
import { ICollege } from './Model/college';
import { College } from './Model/Colleges';
 
@Injectable({
  providedIn: 'root'
})
export class CapService {
  
  
  constructor(private http: HttpClient,private router:Router) { }
  private baseUrl = 'http://localhost:8080'; 

  login(login:Login):Observable<any> {
    return this.http.post(`${this.baseUrl}`+`/adminLogin`,login);
  }

  logout() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
    this.router.navigate(['/carousel'])
  }

  user:any;  
  phoneNo:any;
  securityQuestion:any;
  answer:any;
  message:string;
  status:boolean;
  register(user:any){
    let input={
      "phoneNo":user.mobile,
      "name":user.name,
      "email":user.email,
      "gender":user.gender,
      "dob":user.dob,
      "securityQuestion":user.securityquestion,
      "answer":user.answer,
      "password":user.pwd ,
      "hallTicketNumber":user.hallticket,
      "marks":user.marks ,


    }
    return this.http.post("http://localhost:8080/register",input);
  }
  loginUser(userCredentials:any){
    this.phoneNo = userCredentials.phone;
    let password = userCredentials.password;
    
    return this.http.get("http://localhost:8080/login?phoneNo="+this.phoneNo+"&password="+password);
  }
  passwordReset(info:any){
    this.phoneNo = info.mobile;
    this.securityQuestion = info.securityquestion;
    this.answer = info.answer;
    let password = info.password;
    
     return this.http.put("http://localhost:8080/setpassword?phoneNo="+this.phoneNo+"&securityQuestion="+this.securityQuestion+"&answer="+this.answer+"&password="+password,1);
   
  }
  
  

  
 addCollege(college:College){
  return this.http.post(`${this.baseUrl}`+`/addCollege`,college);
 }











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