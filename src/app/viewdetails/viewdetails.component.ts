import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  result: any;
  val: any;
  haematology:any
  constructor(private route:ActivatedRoute,private service:ServiceService,private router:Router) { }
  ngOnInit(): void {
      let id = this.route.snapshot.params._id;
    console.log(id);
    this.service.getData().subscribe((data) => {
      this.result = data;
      this.result=this.result.data.samples
      console.log(this.result);
      
      // this.result = this.result.data.samples;
      // console.log(this.result.data.samples);

      for (let res of this.result) {
        if (res._id === id) {
          console.log(id);
         console.log(res);
         this.haematology=res
        
         this.haematology= this.haematology.haemotology;
         console.log(this.haematology,"P");
         
         
         
        }
      }
    });
  } 
  // getUser(form: NgForm) {
  //   console.log(form.value);
  //   let { fname, email } = form.value;
  //   this.servs.updateUser({ _id: this.SelectedUser._id, fname: fname, email: email }).subscribe((res) => {
  //       console.log(res);
  //     });
  //     this.ngOnInit();
  //   return this.router.navigate(['/getAllSamples']);  
  // }
  }
 

