import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { CustomExporter } from './export-util/custom-exporter';
import { MatTableExporterModule } from "mat-table-exporter";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddcusComponent } from './addcus/addcus.component';
import { MatTab } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearcproComponent } from './searcpro/searcpro.component';
import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './Recuirement/candidates/candidates.component';
import { RequirementComponent } from './Recuirement/requirement/requirement.component';
import { SubmissionComponent } from './Recuirement/submission/submission.component';
import { InterviewsComponent } from './Recuirement/interviews/interviews.component';
import { ProjectconformComponent } from './Recuirement/projectconform/projectconform.component';
import { RefrenceComponent } from './Recuirement/refrence/refrence.component';
import { RecComponent } from './Recuirement/rec/rec.component';

import { MatMenuModule} from '@angular/material/menu';
import { HotlistComponent } from './Hotlist/hotlist/hotlist.component';
//import { SendmsgComponent } from './sendmsg/sendmsg.component';
import { SendmsgComponent } from './msg/sendmsg/sendmsg.component';
import { SwarmHrUser } from './model/swarmUser';
import { user } from './model/user';
import { EditComponent } from './Action/edit/edit.component';
import { ProjectComponent } from './recur-under/project/project.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SupplierComponent,
    ContactComponent,
    EmployeeComponent,
    AddcusComponent,
    SearcproComponent,
    LoginComponent,
    CandidatesComponent,
    RequirementComponent,
    SubmissionComponent,
    InterviewsComponent,
    ProjectconformComponent,
    RefrenceComponent,
    RecComponent,
    HotlistComponent,SendmsgComponent, EditComponent, ProjectComponent,
  //  SendmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,MatFormFieldModule,
    MatTableModule,BrowserAnimationsModule,MatDialogModule,ReactiveFormsModule,MatCheckboxModule,
    MatTabsModule,MatSortModule,MatPaginatorModule,HttpClientModule,MatInputModule,MatSelectModule,
    MatMenuModule,MatTableExporterModule,MatDatepickerModule,MatProgressSpinnerModule,
    MatAutocompleteModule,MatNativeDateModule
  ],
  providers: [SwarmHrUser,user],
  bootstrap: [AppComponent]
})
export class AppModule { }
