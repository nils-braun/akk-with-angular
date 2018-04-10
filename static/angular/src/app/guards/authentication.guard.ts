import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {MessageService} from '../services/message.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router : Router, private authenticationService : AuthenticationService, private messageService : MessageService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }

    this.messageService.addDangerMessage("You need to be logged in to view this page");
    this.router.navigate(['/login']);
    return false;
  }
}
