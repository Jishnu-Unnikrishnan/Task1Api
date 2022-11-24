import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
userid:any;
userdetails:any;
  constructor(private activatedRoute:ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      this.userid = result['id']
    })
    this.apiservice.userDetails(this.userid)
    .subscribe((result)=>{
      console.log(result);
      this.userdetails = result
      
    })
  }
  

}
