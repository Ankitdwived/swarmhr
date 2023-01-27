import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpsService {
  constructor(private http:HttpClient){}

  deletedata(id:any){
    return this.http.delete<any>("http://localhost:3000/posts/"+id);
  }
  getdata(){
    return this.http.get("http://localhost:3000/posts");
  }
  postdata(data:any){
    return this.http.post("http://localhost:3000/posts",data);
  }
  public sendMessageMultiple(messageData:any) {
    return this.http.post<any>("http://localhost:3000/posts",messageData);
  }
  adddata(data:any){
    return this.http.post<any>("http://localhost:3000/comments",data)
  }

    dataget(){
      return this.http.get("http://localhost:3000/comments");
    }
 

}
