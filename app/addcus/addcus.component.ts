import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmpsService } from '../emps.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addcus',
  templateUrl: './addcus.component.html',
  styleUrls: ['./addcus.component.css']
})
export class AddcusComponent implements OnInit {

  submitted=false

  frmg:FormGroup;
  
  countryList: Array<any> = [
    { name: 'USA', states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'] },
    { name: 'India', states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Delhi','Puducherry'] },
    { name:'Canada',states:['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']}
  ];
  constructor(private fb:FormBuilder,private http:HttpClient,private api:EmpsService){}
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
  Addata(){
    this.submitted=true;
    if(this.frmg.invalid){
      return;
    }
  
    this.api.postdata(this.frmg.value).subscribe(res=>{
      alert("data insert successfully");
  
      this.frmg.reset();
      this.submitted=false;
    },error=>{
      alert("data not inserted");
    })
  }
    onClose(){
     // hello
    }
  get f(){
    return this.frmg.controls;
  }
  isValidFlg:boolean;
  validatePhoneNo(field:any){
    var phoneNumDigits = field.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    
    this.isValidFlg = (phoneNumDigits.length==0 || phoneNumDigits.length == 10);
  
    var formattedNumber = phoneNumDigits;
    if (phoneNumDigits.length >= 6)
      formattedNumber =  phoneNumDigits.substring(0, 3) + '-' + phoneNumDigits.substring(3, 6) + '-' + phoneNumDigits.substring(6,10);
    else if (phoneNumDigits.length >= 3)
      formattedNumber =  phoneNumDigits.substring(0, 3) + '-' + phoneNumDigits.substring(3);
  
    field.value = formattedNumber;
  
  
  }
  
  }
  
