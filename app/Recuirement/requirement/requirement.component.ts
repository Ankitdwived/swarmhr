import { Component ,OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
//import { EmpsService } from '../emps.service';
import { EmpsService } from 'src/app/emps.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddcusComponent } from 'src/app/addcus/addcus.component';
import { cand } from 'src/app/Interf/Cand';
  

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit{

  displayColumn:string[]=['id','name','add','phno','phno2']
  datasource:MatTableDataSource<cand>;
//selection = new SelectionModel<stud>(true, []);
show=false;
onClose(){
  this.show=true;
}
public addVendor() {
  const dialogRef = this.dialog.open(AddcusComponent, {
    height: "99%",
    width: "91%",
    maxWidth: "100vw",
    maxHeight: "99%",
    disableClose: true,
    data: "",
    panelClass:"AddcustomerComponent"
  });
 
}

data:any;
@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort)sort:MatSort;
frmg:FormGroup;
ngOnInit(): void {
  
  

  this.dataa();
}
constructor(private htt:HttpClient,public dialog:MatDialog,private api:EmpsService,private fb:FormBuilder){}
delet(id:any){
  this.api.deletedata(id).subscribe((res)=>{
    alert("data delete successfully")
    this.dataa();
  },
  error=>{
    alert("data not deleted")
  })
}

dataa(){
  this.api.getdata().subscribe(res=>{
  this.data=res;
 this.datasource=new MatTableDataSource(this.data);
 this.datasource.paginator=this.paginator;
 this.datasource.sort=this.sort;
  console.log(this.data);
      } )}
      

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    
        if (this.datasource.paginator) {
          this.datasource.paginator.firstPage();
        }
      }

      editAction(data:any){
       // this.addVendor();
       }
       public venRequestType: string[] = [
        "My Customers",
        "Archived Customers",
        "My Bookmark",
        "All",
      ];
}




