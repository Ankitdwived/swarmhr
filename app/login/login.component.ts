import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmpsService } from '../emps.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string='Ankit Dwivedi';
  password:string='123456';
show=true;
shortLink: string = "";
       loading = false; // Flag variable
       file = null; // Variable to store file
     
     
  submitted:false;
  frmm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router,private api:EmpsService){}
  ngOnInit(): void {
    this.frmm=this.fb.group({
      name:['',Validators.required],
  password:['',Validators.required]
    })}
get f(){
  return this.frmm.controls;
}
    Login(){
     //this.submitted=true;

      this.name='Ankit Dwivedi';
      this.password='123456';
        const user=
           this.name == this.frmm.value.name && this.password==this.frmm.value.password

        
        if(user){
          alert("Owner login sucessfully");
          this.show=false;
          this.route.navigate(['app'])
          this.frmm.reset();
         
        }else{
          alert("user not found");
        }
       }  

       onChange(event:any) {
        this.file = event.target.files[0];
    
  
    // OnClick of button Upload
 
    
  }}


