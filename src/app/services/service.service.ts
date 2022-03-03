import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  navigate(arg0: string[]): void {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get<any>("http://localhost:3000/users/getAllSamples");
  }
  addregister(register){
    return this.http.post<any>("http://localhost:3000/users/register",register);
  }
  addlogin(login){
    return this.http.post("http://localhost:3000/users/login",login)
  }
  updateUser(data:any){
    return this.http.put(`http://localhost:3000/users/getUser/`,data)
  } 
  getview(){
    return this.http.get<any>("http://localhost:3000/users/getParticularUser")
  }
  viewpost(data1){
    return this.http.post<any>("http://localhost:3000/users/particularUser",data1)
  }


  loginInToken(){
    if(localStorage.getItem('key')){
      return true
    }
    else{
      return false
    }
  }
}


