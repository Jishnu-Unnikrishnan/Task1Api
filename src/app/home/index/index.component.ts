import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user="USER DETAILES"
userlist:any=[]
  constructor( private apiservice:ApiService) { }

  ngOnInit(): void {
this.apiservice.getuserlist()
.subscribe((result)=>{
  this.userlist = result
  console.log(this.userlist);
  
})
  }

}
