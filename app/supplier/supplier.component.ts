
import { Component,OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EmpsService } from '../emps.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddcusComponent } from '../addcus/addcus.component';
import { EditComponent } from '../Action/edit/edit.component';
import { dat } from '../model/dat';
import { stud } from '../Interf/stud';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit{
  displayColumn:string[]=['select','id','name','add','phno','phno2','country','Action']
  datasource:MatTableDataSource<stud>;
selection = new SelectionModel<stud>(true, []);
user:dat=new dat;

onClose(){
  
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
submitted=false

  //frmg:FormGroup;
  
  countryList: Array<any> = [
    { name: 'USA', states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'] },
    { name: 'India', states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Delhi','Puducherry'] },
    { name:'Canada',states:['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']}
  ];
frmg:FormGroup;
ngOnInit(): void {
  
  this.frmg=this.fb.group({
    name:['',[Validators.required,Validators.maxLength(30)]],
    phno:['',[Validators.required,Validators.maxLength(12)]],
    phno2:['',Validators.required],
    country:['',Validators.required],
    city:['',Validators.required],
    add:['',Validators.required],
    zipcode:['',Validators.required],
    notes:['',Validators.required],
    state:['',Validators.required]
  
  
  })

  this.dataa();
}states: Array<any>;
  
changeCountry(event:any) {
  if(event.value != 0){
        this.states = this.countryList.find(con => con.name == event.value).states;

  }
    else{
    this.states = [];

    }

}get f(){
  return this.frmg.controls;
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
      public editAction(evt: any) {//console.log(evt);
        const dialogRef = this.dialog.open(EditComponent, {
          width: "91%",
          disableClose: true,
          autoFocus: true,
          height: "99%",
          minHeight: "99%",
          maxWidth: "100vw",
          position: { top: "-10px" },
          panelClass: ["customStyle","EditComponent"],
          data: evt,
          //
        });
       
      }
      isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.datasource.data.length;
        return numSelected === numRows;
      }
      toggleAllRows() {
        if (this.isAllSelected()) {
          this.selection.clear();
          return;
        }
      
        this.selection.select(...this.datasource.data);
      }  checkboxLabel(row?: stud): string {
        if (!row) {
          return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
      }
      public venRequestType: string[] = [
        "My Customers",
        "Archived Customers",
        "My Bookmark",
        "All",
      ];
}


 
