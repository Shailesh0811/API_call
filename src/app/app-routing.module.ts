import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepatrmentListComponent } from './depatrment-list/depatrment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'departments', component: DepatrmentListComponent},
  {path: 'employees' , component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepatrmentListComponent, EmployeeListComponent]