import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from './Model/Login';
import { Router } from '@angular/router';
import { ICollege } from './Model/college';
import { College } from './Model/Colleges';
import { Branches } from './Model/Branches';
import { User } from './Model/User';
 
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
    sessionStorage.removeItem('userType')
    sessionStorage.clear();
    this.router.navigate(['/carousel'])
  }

  contact:any;
  newcontact:Number;

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
     /*  "email":user.email,
      "gender":user.gender,
      "dob":user.dob, */
      "securityQuestion":user.securityquestion,
      "answer":user.answer,
      "password":user.pwd ,
      "hallTicketNumber":user.hallticket,
      "marks":user.marks ,


    }
    return this.http.post("http://localhost:8080/register",input);
  }
  getUser(){
    this.contact=localStorage.getItem("mobile");
    this.newcontact=parseInt(this.contact);
    console.log(this.newcontact);
    return this.http.get("http://localhost:8080/profile?phoneNo="+this.newcontact)

  }
  setUser(user:User){
    
    console.log(user)
    return this.http.put("http://localhost:8080/updateprofile",user);

  }


  loginUser(userCredentials:any){
    this.phoneNo = userCredentials.phone;
    let password = userCredentials.password;
    localStorage.setItem("mobile",this.phoneNo);
    return this.http.get("http://localhost:8080/login?phoneNo="+this.phoneNo+"&password="+password);
  }
  passwordReset(info:any){
    this.phoneNo = info.mobile;
    this.securityQuestion = info.securityquestion;
    this.answer = info.answer;
    let password = info.password;
    
     return this.http.put("http://localhost:8080/setpassword?phoneNo="+this.phoneNo+"&securityQuestion="+this.securityQuestion+"&answer="+this.answer+"&password="+password,1);
   
  }
  
  

  
 addCollege(college:College):Observable<any>{
  return this.http.post(`${this.baseUrl}`+`/addCollege`,college);
 }
 addBranches(branches:Branches[]):Observable<any>{
  return this.http.post(`${this.baseUrl}`+`/addBranches`,branches);
 }

//  branchesList:Array<Branches>=[];

 create(collegeObj:ICollege) : Observable<any>{ 
  console.log(collegeObj);
  let college=new College();
  let branch=new Branches();
  college.collegeCode=collegeObj.collegeId;;
  college.collegeName=collegeObj.collegeName;
  college.state=collegeObj.location;
  college.city=collegeObj.city;
  college.address=collegeObj.address;
  college.contactNumber=collegeObj.contactNumber;
  let  branchesList:Branches[]=[];
  console.log(collegeObj)
  
 for(let i=0;i<collegeObj.departments.length;i++){

 
  branch.name= collegeObj.departments[i].name;
  branch.cutOff= collegeObj.departments[i].cutoff;
  console.log(branch.name);
  console.log(branch.cutOff);
  console.log(branch);
  console.log(branchesList);
  if(branch !=null){
    branchesList.push(branch);
    branch=new Branches();  
  }
 }
 console.log(college);
 console.log(branchesList);

 this.addBranches(branchesList).subscribe();

 return this.http.post(`${this.baseUrl}`+`/addCollege`,college);
}



updateCollege(collegeObj:ICollege) : Observable<any>{ 
  console.log(collegeObj);
  let college=new College();
  let branch=new Branches();
  college.collegeCode=collegeObj.collegeId;;
  college.collegeName=collegeObj.collegeName;
  college.state=collegeObj.location;
  college.city=collegeObj.city;
  college.address=collegeObj.address;
  college.contactNumber=collegeObj.contactNumber;
  let  branchesList:Branches[]=[];
 for(let i=0;i<collegeObj.departments.length;i++){

  branch.name= collegeObj.departments[i].name;
  branch.cutOff= collegeObj.departments[i].cutoff;
  console.log(branch.name);
  console.log(branch.cutOff);
  console.log(branch);
  console.log(branchesList);
  if(branch !=null){
    branchesList.push(branch);
    branch=new Branches();  
  }
 }
 console.log(college);
 console.log(branchesList);

 this.addBranches(branchesList).subscribe();

 return this.http.put(`${this.baseUrl}`+`/updateCollege`,college);
}


college:College=new College();
setCollegeToUpdate(clg){
 
  this.college=clg;
  console.log(this.college)
}
getCollege(){
  return this.college;

}

deleteCollege(collegeCode:String){
  return this.http.delete(`${this.baseUrl}`+`/deleteCollege/${collegeCode}`);
}



viewColleges():any{
  return this.http.get("http://localhost:8080/getAllcolleges");
}

viewpredictedColleges(contactNumber:string,value:string){

  return this.http.get(`${this.baseUrl}`+`/viewp/${parseInt(localStorage.getItem("mobile"))}/${value}`);
 }



  giveFeedback(data: any,message1) {
    let input = {
      "description": data.feedback,
      "feedback":message1,
      "phoneNo":parseInt(localStorage.getItem("mobile"))
    }
    console.log(input)
    return this.http.post("http://localhost:8080/feedback", input);

  }

 getfeedback()
 {
   return this.http.get("http://localhost:8080/getFeedback");
 }
 getuserData()
 {
  return this.http.get("http://localhost:8080/getUserDetails");
 }


 viewCollegesOnMarks(contactNumber:number){
  return this.http.get("http://localhost:8080/viewM/"+contactNumber);
 }









  // private collegeList:ICollege[]=[

  //   {
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   },
  //   {
  //     collegeId:"2",
  //     collegeName:"fdf",
  //     address:"eew",
  //     location:"ewdscn",
  //     city:"wdsfcbvn",
  //     contactNumber:"awsedgr",
  //     departments:[
  //       {
  //       name:"IT", 
  //       cutoff:345
  //       },
  //       {
  //         name:"ECE",
  //        cutoff:98889
  //       },
  //       {
  //         name:"EEE",
  //        cutoff:400
  //       },
  //       {
  //         name:"CSE",
  //        cutoff:50
  //       },
  //       {
  //         name:"MECH",
  //        cutoff:4558
  //       }
  //   ],
  //   },{
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   },{
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   },{
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   },{
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   },{
  //     collegeId:"1",
  //     collegeName:"Anurag",
  //     address:"Venkatapur",
  //     location:"OU",
  //     city:"Hyderabad",
  //     contactNumber:"123456789",
  //     departments:[
  //       {
  //         name:"IT", 
  //         cutoff:345
  //         },
  //         {
  //           name:"ECE",
  //          cutoff:3223
  //         },
  //         {
  //           name:"EEE",
  //          cutoff:2231
  //         },
  //         {
  //           name:"CIVIL",
  //          cutoff:211
  //         },
  //         {
  //           name:"MECH",
  //          cutoff:4558
  //         }
  //     ]
  //   }
  //  ]
  //  ;
  

  // getCollegesList(): ICollege[]{
    
  //   return this.collegeList;
  // }

  // getCollgeById(id): ICollege{
  //   let college: ICollege;
  //   for (let i =0; i< this.collegeList.length;++i){
  //     if(id==this.collegeList[i].collegeId){
  //       college= this.collegeList[i];
  //       i= this.collegeList.length;
  //     }  
  //   }
  //   return college;

  //  //  return URL for Backend 
  // }

  // errorHandler(error: HttpErrorResponse) {
  //   console.error(error);
  //   return throwError(error.message || "Server Error");
  // }
 
}