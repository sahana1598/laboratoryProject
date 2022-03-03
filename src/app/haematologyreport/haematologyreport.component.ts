import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-haematologyreport',
  templateUrl: './haematologyreport.component.html',
  styleUrls: ['./haematologyreport.component.css']
})
export class HaematologyreportComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }
  selectedId:any
  ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.selectedId = params['id'];  
      });
  }

  
}
