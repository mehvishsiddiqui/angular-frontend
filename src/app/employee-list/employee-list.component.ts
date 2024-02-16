import { Component, NgModule, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports : [CommonModule,
            
  ],
  templateUrl: './employee-list.component.html',
  styleUrl:'./employee-list.component.css',
 
})


        
export class EmployeeListComponent implements OnInit{
  
      employees!: Employee[] ;


  constructor(private employeeService : EmployeeService ,
    private router : Router) { }
  
 
  
  ngOnInit(): void {    
   this.getEmployees();
}
private getEmployees(){
 this.employeeService.getEmployeeList().subscribe(data => {
   this.employees = data 
 });
}


employeeDetails(id : number){
  this.router.navigate(['employee-details' , id]);
  }


updateEmployee(id : number){
  this.router.navigate(['update-employee' , id]);
  }

   deleteEmployee(id : number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
   }
}

 