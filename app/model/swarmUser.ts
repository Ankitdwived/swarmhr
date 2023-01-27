import { Injectable } from '@angular/core';

@Injectable()
export class SwarmHrUser 
{
email: string;
fName: string;
lName: string;
mName: string;
mobile: string;
orgId: string;
orgName: string;
userName: string;
isLogin:boolean;
initialToken:string;
isRedirect:string="N";
role:any;
envUrl:string;
country:string;
flagURL:string;
settingsWidth : number;
recruitersListByOrg:any;
teamListByOrg:any;
}
