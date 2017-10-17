import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'boots-navbar',
  templateUrl: './boots-navbar.component.html',
  styleUrls: ['./boots-navbar.component.css']
})
export class BootsNavbarComponent {
  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }

}
