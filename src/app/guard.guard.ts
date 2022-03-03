import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './services/service.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private data: ServiceService) {}
  canActivate() {
    if (localStorage.getItem("key")) {
      return true;
    } else {
      alert('error');
    }
  }
}
