import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  val: any = '';
  success: Object;
  error: boolean;
  message: any;
  constructor(private route: Router, private log: ServiceService) {}

  ngOnInit(): void {}
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  addLoginData() {
   
    
    this.log.addlogin(this.form.value).subscribe((res) => {
      this.val = res;
      // this.val=this.val.data.token
      console.log(this.val);
      
console.log(this.email.value);
console.log(this.val.data.email);


      if (this.email.value === this.val.data.email && this.password.value === this.val.data.password) {
        
        localStorage.setItem("key",this.val.data.token)
        return this.route.navigate(['getAllSamples'])
      }
      // else if (this.email.value === this.val.data.email && this.password.value!=this.val.data.password) {
      //     alert("Please fill correctly")
      //    }
      //    else{
      //      alert("register again")
      //    }
    });
    console.log("ddddddd");

  }
}
