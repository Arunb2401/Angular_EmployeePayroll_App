import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employees: Employee = new Employee

  constructor(private router: Router,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
  }
  /**
   * 
   * @param Emp 
   */
  postData(Emp: any) {
    this.employees.department = ""
    this.employees.name = Emp.value.name;
    this.employees.startDate = Emp.value.day + Emp.value.month + Emp.value.year;
    for (let emp of this.departmentList) {
      if (emp.isSelected) {
        this.employees.department += (emp.value);
      }
    }
    this.employeeService.postEmployeesList(Emp).subscribe((data) =>{
      console.log("Posted Data", data);
    });
    console.log(Emp);
    console.log(this.employees);
  }

  departmentList = [
    { id: 1, value: "HR", isSelected: false },
    { id: 2, value: "Sales", isSelected: false },
    { id: 3, value: "Finance", isSelected: false },
    { id: 4, value: "Engineer", isSelected: false },
    { id: 5, value: "Others", isSelected: false },
  ]

  deptChange(num: number) {
    this.departmentList = this.departmentList.map(deptData => {
      if (deptData.id == num) {
        deptData.isSelected = !deptData.isSelected;
      }
      return deptData;
    })
    console.log(this.departmentList)
  }
}