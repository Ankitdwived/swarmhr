import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { EmpsService } from 'src/app/emps.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SwarmHrUser } from 'src/app/model/swarmUser';
import { user } from 'src/app/model/user';
@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css']
})
export class SendmsgComponent implements OnInit{
  finalData:any;
  submitted = false;
  sendingSMSDataForm: FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<SendmsgComponent>,
    private api:EmpsService,
    private formBuilder: FormBuilder,    private swarmHrUser :user,

  ) { }
  ngOnInit() {
    this.sendingSMSDataForm = this.formBuilder.group({
      countryCode:['', Validators.required],
      phoneNo:['', Validators.required],
      textMessage:['', Validators.required],
    });
  }
  get f() { return this.sendingSMSDataForm.controls; }
  sendingSMSData:any;
  sendMessageToContact() {
    this.submitted = true;
    if (this.sendingSMSDataForm.invalid) {
      // console.log("Form res ",JSON.stringify(this.sendingSMSDataForm.value))
      return;
    }
   this.sendingSMSData = this.sendingSMSDataForm.value;
   let countryCode = this.sendingSMSData.countryCode;
   let phoneNo = this.sendingSMSData.phoneNo;
   let textMessage = this.sendingSMSData.textMessage;
   let messageData = {
    countryCode : countryCode,
    mobileNo : phoneNo,
    message : textMessage,
    orgId :  this.swarmHrUser.orgId,
    createdUserName : this.swarmHrUser.userName,
    createdBy : this.swarmHrUser.lName + " "+this.swarmHrUser.fName,
    receiverId : '',
    receiverName : '',
    type : 'Global Messages'
 }
  
  this.api.sendMessageMultiple(messageData)
 
      .pipe(first())
        .subscribe(
          data => {
            alert("Sent message successfully.Success!!");
            this.dialogRef.close();
            this.refreshParent();
          })
  }
  public onClose(){
    this.dialogRef.close();
  }
  refreshParent(){
    this.dialogRef.close();
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
