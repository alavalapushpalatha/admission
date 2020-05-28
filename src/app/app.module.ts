import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { CapService } from './cap.service';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomenavComponent } from './homenav/homenav.component';
import { FooternavComponent } from './footernav/footernav.component';
import { CorouselbarComponent } from './corouselbar/corouselbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserNavbarComponent,
    UpdateComponent,
    CreateComponent,
    ViewAllComponent,
    HomenavComponent,
    FooternavComponent,
    CorouselbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
