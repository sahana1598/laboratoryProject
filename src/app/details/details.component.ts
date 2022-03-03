import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  result: any;
  val:any;
  fname:any
  date1:Date=new Date()
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      this.result = res;
      this.val=this.result.data.samples
    }) 
  }

  Search(){
    if(this.fname==""){
      this. ngOnInit();
    }
    else
    {
      this.val=this.val.filter(res=>
        {
        return res.fname.toLocaleLowerCase().includes(this.fname.toLocaleLowerCase())   
      })
    }
  }
logout(){
  localStorage.removeItem('key');
}
}
