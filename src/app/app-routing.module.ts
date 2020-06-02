import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooternavComponent } from './footernav/footernav.component';
import { CorouselbarComponent } from './corouselbar/corouselbar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewCollegeComponent } from './view-college/view-college.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PredictedCollegesComponent } from './predicted-colleges/predicted-colleges.component';
import { AllCollegesComponent } from './all-colleges/all-colleges.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path : '',redirectTo: '/carousel', pathMatch:'full'}, 
  {path :'aboutUs', component: FooternavComponent},
  {path :'carousel', component:CorouselbarComponent},
  {path :'login', component:UserLoginComponent},
  {path :'adminLogin', component:AdminLoginComponent},
  {path :'register', component:UserRegistrationComponent},
  {path :'viewCollege', component:ViewCollegeComponent},
  {path :'addCollege', component:AddCollegeComponent},
  {path :'viewStudents', component:ViewStudentsComponent},
  {path :'viewFeedback', component:ViewFeedbackComponent},
  {path :'adminHome', component:AdminHomeComponent},
  {path :'userHome', component:UserHomeComponent},
  {path :'predictedColleges', component:PredictedCollegesComponent},
  {path :'allColleges', component:AllCollegesComponent},
  {path :'giveFeedback', component:GiveFeedbackComponent},
  {path :'userProfile', component:UserProfileComponent},
  {path :'forgotPassword', component:ForgotPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
