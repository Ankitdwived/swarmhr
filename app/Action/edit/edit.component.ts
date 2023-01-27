import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { EmpsService } from '../emps.service';
import { Validators } from '@angular/forms';
import { EmpsService } from 'src/app/emps.service';
import { dat } from 'src/app/model/dat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted=false

  frmg:FormGroup;
user:dat=new dat;
 
  submit(){//alert("hh")
    this.submitted=true;
    if(this.frmg.invalid){
      return;
    }
  }
  countryList: Array<any> = [
    { name: 'USA', states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'] },
    { name: 'India', states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Delhi','Puducherry'] },
    { name:'Canada',states:['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']}
  ];
  constructor(private fb:FormBuilder,private http:HttpClient,private api:EmpsService){}
  ngOnInit(): void {
  this.frmg=this.fb.group({
    id:Number,
    name:['',[Validators.required,Validators.maxLength(30)]],
    phno:['',[Validators.required,Validators.maxLength(12)]],
    phno2:['',Validators.required],
    country:['',Validators.required],
    city:['',Validators.required],
    add:['',Validators.required],
    zipcode:['',Validators.required],
    notes:['',Validators.required],
    state:['',Validators.required]
  
  
  })}
  states: Array<any>;
  
  changeCountry(event:any) {
    if(event.value != 0){
          this.states = this.countryList.find(con => con.name == event.value).states;
  
    }
      else{
      this.states = [];
  
      }
  }
  get f(){
    return this.frmg.controls;
  }
  editAction(data:any):void{
    // this.addVendor();
    console.log(data);
     this.user.id=data.id;
     this.frmg.controls['name'].setValue(data.name);
     this.frmg.controls['phno'].setValue(data.phno);
     this.frmg.controls['phno2'].setValue(data.phno2);
     this.frmg.controls['country'].setValue(data.country);
     this.frmg.controls['city'].setValue(data.city);
     this.frmg.controls['city'].setValue(data.city);
this.frmg.controls['add'].setValue(data.add);
this.frmg.controls['zipcode'].setValue(data.zipcode);
this.frmg.controls['notes'].setValue(data.notes);
this.frmg.controls['state'].setValue(data.state);

    
    
   

   }
}
