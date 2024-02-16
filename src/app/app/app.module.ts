import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from '../app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    CommonModule,        
    //  AppRoutingModule,
     FormsModule,
     RouterModule,
    
     
  ],

  //  exports: [EmployeeListComponent,
  //           CreateEmployeeComponent
  // ],

  providers: [],
  bootstrap :[AppComponent]
})
export class AppModule { }




// EmployeeListComponent,
//      CreateEmployeeComponent,
//      AppComponent,