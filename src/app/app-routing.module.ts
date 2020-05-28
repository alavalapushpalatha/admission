import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { UpdateComponent } from './update/update.component';
import { FooternavComponent } from './footernav/footernav.component';
import { CorouselbarComponent } from './corouselbar/corouselbar.component';


const routes: Routes = [
  {path : '',redirectTo: '/carousel', pathMatch:'full'}, 
  { path: 'create', component: CreateComponent },
  {path :'viewAll', component: ViewAllComponent},
  {path :'update', component: UpdateComponent},
  {path :'aboutUs', component: FooternavComponent},
  {path :'carousel', component:CorouselbarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
