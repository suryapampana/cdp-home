import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path: '', component:EmployeeComponent },
  {path: 'employee', component: EmployeeComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'leadership', component: LeadershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
