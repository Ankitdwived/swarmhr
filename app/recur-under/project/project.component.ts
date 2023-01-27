import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpsService } from 'src/app/emps.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
submitted=false;
frmg:FormGroup;
  constructor(private fb:FormBuilder,private api:EmpsService){}

  ngOnInit(): void {
this.frmg=this.fb.group({
  ptitle:['',[Validators.required]],
  clientName:['',[Validators.required]],
  pltype:['',[Validators.required]],
  cliconta:['',[Validators.required]],
  doj:['',[Validators.required]],
  ced:['',[Validators.required]],
  tdo:['',[Validators.required]],
  adddocum:['',[Validators.required]],
  comment:['',[Validators.required]],
  cname:['',[Validators.required]],
  fname:['',[Validators.required]],
  mname:['',[Validators.required]],
  lname:['',[Validators.required]],
  email:['',[Validators.required]],
  phno:['',[Validators.required]],
  add1:['',[Validators.required]],
  add2:['',[Validators.required]],
  country:['',[Validators.required]],
  state:['',[Validators.required]],
  city:['',[Validators.required]],
  billdate:['',[Validators.required]],
 invoicing:['',[Validators.required]],
 billrate:['',[Validators.required]],
  payrateh:['',[Validators.required]],
  oneplace:['',[Validators.required]],
  invammount:['',[Validators.required]],
  immegracost:['',[Validators.required]],
  insurancec:['',[Validators.required]],
requiremen:['',[Validators.required]],
recruiter:['',[Validators.required]],
accmanager:['',[Validators.required]],
submissis:['',[Validators.required]],

})
    
  }
  get f(){
    return this.frmg.controls;
  }
data:any;
 postdata(){
  this.submitted=true;
  if(this.frmg.invalid){
    return
  }
  this.api.adddata(this.frmg.value).subscribe(res=>{
    this.data=res;
console.log(this.data);
alert("data inserted");
this.frmg.reset();
  },error=>{
    alert("data not inserting")
  })
 } 
 

}
