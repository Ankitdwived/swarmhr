import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HotlistComponent } from './Hotlist/hotlist/hotlist.component';
import { LoginComponent } from './login/login.component';
import { RecComponent } from './Recuirement/rec/rec.component';
import { SearcproComponent } from './searcpro/searcpro.component';

const routes: Routes = [
  {path:"customer",component:EmployeeComponent},
  {path:"searc",component:SearcproComponent},
  {path:"login",component:LoginComponent},
  {path:"requirement",component:RecComponent},
  {path:"hotl",component:HotlistComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
