import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http:HttpClient) { }
  readonly APIurl ="https://localhost:44304/api"
  httpoptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // getDepList():Observable<any[]>
  // {
  //   return this.http.get<any>(this.APIurl+'/project/Getdetails');
  // }
  getDepList()
  {
    return this.http.get('https://localhost:44304/api/project/Getdetails',this.httpoptions);
  }
  // addList(val:any){
  //   return this.http.post(this.APIurl+ '/project/Getinsert',val);
  // }
  addList(val:any){
    return this.http.post('https://localhost:44304/api/project/Getinsert',val,this.httpoptions).subscribe();
}
  updateList(val:any){
    return this.http.put(this.APIurl+ '/project/Getupdate',val);
    // return this.http.put('https://localhost:44304/api/project/Getinsert',val,this.httpoptions).subscribe();
  }
  deleteList(val:number){
    return this.http.delete('https://localhost:44304/api/project/getdelete/'+val);
  }
  

 
}
