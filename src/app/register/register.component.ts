import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private reg: ServiceService, private rout: ActivatedRoute) { }
  result: any
  ngOnInit(): void {
    let id = this.rout.snapshot.params.id
    console.log(id);
    this.reg.getData().subscribe((data) => {
      this.result = data
    })
  }

  form = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })
  get fname() {
    return this.form.get("fname")
  }
  get email() {
    return this.form.get("email")
  }
  get password() {
    return this.form.get('password')
  }
  get role() {
    return this.form.get("role")
  }
  addData() {
    this.reg.addregister(this.form.value).subscribe((res) => {
      console.log(res);
      return this.router.navigate(['getAllSamples'])
    })
  }




  // onSubmit(value: NgForm) {
  //   console.log(value);
  //   // alert(JSON.stringify(this.form.value));
  // }
  // rname: any
  // remail: any
  // rpassword: any
  // rrole: any
  // register() {
  //   this.rname = this.name.value
  //   this.remail = this.email.value
  //   this.rpassword = this.password.value
  //   this.rrole = this.role.value
  // }
  // submitValidation() {
  //   if (this.rname != null && this.remail != null && this.rpassword != null && this.rrole != null)
  //     return this.router.navigate[('details')]
  //   else {
  //     alert('Fill all the details')
  //   }
  // }

}


