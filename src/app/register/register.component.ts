// register.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // userData = {
  //   username: '',
  //   email: '',
  //   password: ''
  // };
  

  userForm!: FormGroup;
  

  constructor(
     private router: Router,
     private userService: UserService,
     private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
      email: [null,[Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.userForm)
    if(  this.userForm.valid ){
      this.userService.register(this.userForm.value)
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
}

