import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit{
  searchQuery: string = '';
  

  formGroup: FormGroup;
  
  films: any[] = [
    { title: 'Spider-Man: No Way Home 1', genre: 'Action, Aventure, Fantaisie', director: 'Jon Watts', duration: "2h28m", imageUrl: 'assets/Spiderman.png' },
    { title: 'The Batman', genre: 'Action, Crime, Drame', director: 'Matt Reeves', duration: "2h56m", imageUrl: 'assets/The Batman.png' },
    { title: 'Dune', genre: 'Science-fiction, Aventure, Action', director: 'Denis Villeneuve', duration: "2h35m", imageUrl: 'assets/Dune.png' },

    { title: 'Venom: Let There Be Carnage', genre: 'Action, Aventure, Science-Fiction', director: 'Andy Serkis', duration: "1h37m", imageUrl: 'assets/Venom.png' },
    { title: 'Man of Steel', genre: 'Action, Aventure, Science-Fiction', director: 'Zack Snyder', duration: "2h23m", imageUrl: 'assets/ManOfSteel.png' },
    { title: 'Joker', genre: 'Drame, Thriller, Crime', director: 'Todd Phillips', duration: "2h2m", imageUrl: 'assets/Joker.png' },

    { title: 'Aquaman et le royaume perdu', genre: 'Action, Aventure, Fantaisie', director: 'James Wan', duration: "Inconnu", imageUrl: 'assets/Aquaman.png' },
    { title: 'The Flash', genre: 'Action, Aventure', director: 'Andy Muschietti', duration: "Inconnu", imageUrl: 'assets/Flash.png' },
    { title: 'Black Adam', genre: 'Science-fiction, Aventure, Action', director: 'Jaume Collet-Serra', duration: "Inconnu", imageUrl: 'assets/BlackAdam.png' }




  ];

  constructor() {
    
    this.formGroup = new FormGroup({
  });
  }

  ngOnInit(): void {
   
}

}