import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
{path: '',component:EmployeeListComponent},
{path:'employee-form',component:EmployeeFormComponent},
{path: 'addUser', component:EmployeeFormComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
