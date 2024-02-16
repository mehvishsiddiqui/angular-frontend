import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

    id! : number;
    employee!: Employee; 
    constructor(private employeeService : EmployeeService,
      private route: ActivatedRoute,
      private router :Router) { }


  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];

     this.employee = new Employee();
     this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
     });
  }

}
