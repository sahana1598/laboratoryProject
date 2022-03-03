import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  isSelected:boolean=false
  isSelected1:boolean=false
  isSelected2:boolean=false
  checkedItems: any;
  // onChange(){
  //   console.log(this.isSelected);
  // } 
  ngOnInit(): void {

  }
constructor(   private router: Router, private route:ActivatedRoute) {}

  onChecked(isSelected:any , event:any){
    let {checked, value} = event.target;
    if(checked) {
      this.checkedItems.push(value);
    } else {
      let index = this.checkedItems.indexOf(value)
      if (index !== -1) this.checkedItems.splice(index, 1);
    }
  }
  goToOther() {
     this.router.navigate(['/haematology'], {relativeTo: this.route, queryParams: { id: this.checkedItems.join() } });
  }
}

// onClick(){
//   if(this.isSelected==true ){
//     this.route.navigate(['haematology'])
//       }
    
//       if(this.isSelected2==true){
//         this.route.navigate(['thyroid'])
//       }
//       if(this.isSelected1==true){
//       this.route.navigate(['glucomtery'])
//     }
// }

