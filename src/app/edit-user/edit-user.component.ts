import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private rout: ActivatedRoute,
    private servs: ServiceService,
    private router: Router
  ) {}
  result: any;
  SelectedUser: any;
  val: any;
  ngOnInit(): void {
    let id = this.rout.snapshot.params._id;
    console.log(id);
    this.servs.getData().subscribe((data) => {
      this.result = data;
      this.result = this.result.data.samples;
      // console.log(this.result.data.samples);

      for (let res of this.result) {
        if (res._id === id) {
          this.SelectedUser = res;
        }
      }
    });
  }
  getUser(form: NgForm) {
    console.log(form.value);
    let { fname, email } = form.value;
    this.servs.updateUser({ _id: this.SelectedUser._id, fname: fname, email: email }).subscribe((res) => {
        console.log(res);
      });
      this.ngOnInit();
    return this.router.navigate(['/getAllSamples']);  
  }
}