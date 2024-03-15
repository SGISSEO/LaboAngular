import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cooldownProgress: number = 0;
  cooldownInterval: any;
  messages: Message[] = [];

  userForm!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ){
    this.userForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]]
    });
  }

  onSubmit() {
    if(!this.userForm.valid){
      console.log('error');
      return;
    }

    // Réinitialiser les messages
    this.messages = [];

    // Simuler une connexion réussie après 5 secondes
    setTimeout(() => {
      this.userService.login(this.userForm.value).subscribe({
        next: response => {
          // Afficher le message de succès
          this.messages = [{ severity: 'success', summary: 'Connexion réussie', detail: 'Vous êtes maintenant connecté.' }];
          // Démarrer la barre de progression
          this.startCooldown();
          // Rediriger vers la page d'accueil après un court délai
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 5500); // Rediriger après 5 secondes
        },
        error: error => {
          this.messages = [{ severity: 'error', summary: 'Erreur', detail: 'Nom d\'utilisateur ou mot de passe incorrect. Veuillez réessayer.' }];
          this.startCooldown();

          setTimeout(() => {
            this.messages = [];
          }, 6000);
        }
      });
    }); 
  }

  startCooldown() {
    this.cooldownProgress = 0;
    clearInterval(this.cooldownInterval);
    this.cooldownInterval = setInterval(() => {
      this.cooldownProgress += 100 / 5; // 5 secondes pour atteindre 100%
      if (this.cooldownProgress >= 100) {
        clearInterval(this.cooldownInterval);
        this.cooldownProgress = 0; // Réinitialiser la barre de progression
        this.messages = []; // Effacer le message après le cooldown
      }
    }, 1000); // Mettre à jour toutes les secondes
  }
}
