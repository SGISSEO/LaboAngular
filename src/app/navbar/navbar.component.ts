import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MenuItem } from 'primeng/api';
import { __values } from 'tslib';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items!: MenuItem[];  
  isLogged!: boolean;

  constructor(private userService: UserService) {
    userService.isLogged$.subscribe((value) => {
      this.isLogged = value
      this.items = [
        {label: 'Accueil', routerLink: '/home', icon: 'pi pi-home'},
        {label: 'Films', routerLink: '/film', icon: 'pi pi-ticket'},
        {label: 'Séances', routerLink: '/seance', icon: 'pi pi-calendar'},
        {label: 'Salles', routerLink: '/salle'},
        {label: 'Réservations', routerLink: '/reservation', icon: 'pi pi-bookmark'},
        {label: 'Login', routerLink: '/login', icon: 'pi pi-sign-in',visible: !this.isLogged},
        {label: 'Register', routerLink: '/register', icon: 'pi pi-user-plus',visible: !this.isLogged},
        {label: 'Logout', routerLink: '/login', icon: 'pi pi-sign-out', command: () => this.logout(),visible: this.isLogged}
      ];
    })

  }

  // isLoggedIn(): boolean {
  //   return this.userService.auth !== null;
  // }

  logout(): void {
    this.userService.logout();
  }

}
