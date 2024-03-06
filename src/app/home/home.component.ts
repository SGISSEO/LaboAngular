import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';
  

  formGroup: FormGroup;
  
  films: any[] = [
    { title: 'Spider-Man: No Way Home 1', genre: 'Action, Aventure, Fantaisie', director: 'Jon Watts', duration: "2h28m", imageUrl: 'assets/Spiderman.png' },
    { title: 'The Batman', genre: 'Action, Crime, Drame', director: 'Matt Reeves', duration: "2h56m", imageUrl: 'assets/The Batman.png' },
    { title: 'Dune', genre: 'Science-fiction, Aventure, Action', director: 'Denis Villeneuve', duration: "2h35m", imageUrl: 'assets/Dune.png' },
  ];

  constructor() {
    
    this.formGroup = new FormGroup({
  });
  }

  ngOnInit(): void {
   
}
}