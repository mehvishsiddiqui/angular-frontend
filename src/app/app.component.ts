import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app.routes';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
     EmployeeListComponent,
     CreateEmployeeComponent,
     UpdateEmployeeComponent,
     CommonModule, FormsModule , RouterLink , RouterLinkActive , HttpClientModule
    ],
     
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[EmployeeService]
})
export class AppComponent {
  title = 'Angular 17  Spring Boot CRUD Full Stack App ';
}
