import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor( private api:HttpClient) { }
  getuserlist(){
return this.api.get('http://localhost:3000/users')
  }
  userDetails(userid:any){
    return this.api.get('http://localhost:3000/users/'+userid)
  }
}
