import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';
  isLoggedIn: boolean = false; // Déclaration de la propriété isLoggedIn
  displayModal: boolean = false;
  selectedFilm: any; // Pour stocker les détails du film sélectionné
  

  formGroup: FormGroup;
  
  films: any[] = [
    { title: 'Spider-Man: No Way Home 1', genre: 'Action, Aventure, Fantaisie', director: 'Jon Watts', duration: "2h28m", description: '"Spider-Man: No Way Home" est un film de super-héros qui suit les aventures de Peter Parker / Spider-Man, confronté à une crise lorsque son identité secrète est révélée au grand public. Dans sa quête pour réparer les dommages causés par un sort magique, Peter se retrouve plongé dans un multivers où il rencontre d autres versions de lui-même.', imageUrl: 'assets/Spiderman.png' },
    { title: 'The Batman', genre: 'Action, Crime, Drame', director: 'Matt Reeves', duration: "2h56m", description: '"The Batman" est un film de super-héros qui explore une version sombre et réaliste de l univers de Batman. Réalisé par Matt Reeves, il met en vedette Robert Pattinson dans le rôle de Bruce Wayne / Batman. L intrigue suit Batman alors qu il enquête sur une série de meurtres mystérieux à Gotham City, révélant une conspiration impliquant certains des criminels les plus redoutables de la ville, y compris le légendaire Joker.' ,imageUrl: 'assets/The Batman.png' },
    { title: 'Dune', genre: 'Science-fiction, Aventure, Action', director: 'Denis Villeneuve', duration: "2h35m", description: '"Dune" est une épopée de science-fiction réalisée par Denis Villeneuve, adaptée du roman du même nom écrit par Frank Herbert. Le film suit l histoire de Paul Atreides, un jeune noble dont la famille est chargée de gouverner la planète désertique Arrakis, connue pour sa ressource la plus précieuse, le "melange d épices".' ,imageUrl: 'assets/Dune.png' },
  ];
  toggleDescription(film: any) {
    film.showDescription = !film.showDescription;
  }
  onMouseEnter(film: any) {
    film.hovered = true;
  }

  onMouseLeave(film: any) {
    film.hovered = false;
  }

  showModal(film: any) {
    this.selectedFilm = film; // Stocke les détails du film sélectionné
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }
  

  constructor(private userService: UserService) {
    
    this.formGroup = new FormGroup({
  });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLogged;
  }

}