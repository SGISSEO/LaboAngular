// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };
  userForm!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
 ) {
  this.userForm = this.fb.group({
    username: [null,[Validators.required]],
    password: [null,[Validators.required]]
  });
 }

 onSubmit() {
  // console.log(this.userData);
  
  //  this.userService.login(this.userData)
  //    .subscribe({
  //      next: response => {
  //        console.log('Réponse du serveur :', response);
       
  //        if (response) {
  //          this.router.navigate(['/home']);
  //        } else {
  //          console.error('La connexion a échoué : Réponse vide ou invalide.');
  //        }
  //      },
  //      error: error => {
  //        console.error('Erreur lors de l\'envoi des données au serveur :', error);
  //      }
  //    });

  console.log(this.userForm.value);
  
  if(!this.userForm.valid){
    console.log('error');
    
    return;
  }

     this.userService.login(this.userForm.value)
     .subscribe({
       next: response => {
         console.log('Réponse du serveur :', response);
         this.router.navigate(['/home']);
       },
       error: error => {
         console.error('Erreur lors de l\'envoi des données au serveur :', error);
       }
     });

 }
}
