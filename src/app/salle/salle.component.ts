import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {


  salles: any[] = [
    { nom: 'Salle 1', capacite: 50,  personne: 49, film: 'Spider-Man: No Way Home 1', etat: 'Libre' },
    { nom: 'Salle 2', capacite: 50,  personne: 50, film: 'The Batman', etat: 'Occupée' },
    { nom: 'Salle 3', capacite: 50,  personne: 25, film: 'Dune', etat: 'Libre' },

    { nom: 'Salle 4', capacite: 50, personne: 50, film: 'Venom: Let There Be Carnage', etat: 'Occupée'},
    { nom: 'Salle 5', capacite: 50, personne: 0, film: 'Man of Steel', etat: 'Libre'},
    { nom: 'Salle 6', capacite: 50, personne: 25, film: 'Joker', etat: 'Libre'},

    { nom: 'Salle 7', capacite: 50, personne: 50, film: 'Aquaman et le royaume perdu', etat: 'Occupée'},
    { nom: 'Salle 8', capacite: 50, personne: 35, film: 'The Flash', etat: 'Libre'},
    { nom: 'Salle 9', capacite: 50, personne: 45, film: 'Black Adam', etat: 'Libre'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
