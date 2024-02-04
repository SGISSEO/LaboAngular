// register.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
     private router: Router,
     private userService: UserService
  ) {}

  onSubmit() {
    this.userService.register(this.userData)
      .subscribe({
        next: response => {
          console.log('Réponse du serveur :', response);
        
          if (response) {
            this.router.navigate(['/login']);
          } else {
            console.error('La connexion a échoué : Réponse vide ou invalide.');
          }
        },
        error: error => {
          console.error('Erreur lors de l\'envoi des données au serveur :', error);
        }
      });
  }
}

