import { Component, OnInit,   } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{
  searchQuery: string = '';
  displayModal: boolean = false;
  selectedFilm: any; // Pour stocker les détails du film sélectionné
 
  

  formGroup: FormGroup;
  
  films: any[] = [
    { title: 'Spider-Man: No Way Home 1', genre: 'Action, Aventure, Fantaisie', director: 'Jon Watts', duration: "2h28m", description: '"Spider-Man: No Way Home" est un film de super-héros qui suit les aventures de Peter Parker / Spider-Man, confronté à une crise lorsque son identité secrète est révélée au grand public. Dans sa quête pour réparer les dommages causés par un sort magique, Peter se retrouve plongé dans un multivers où il rencontre d autres versions de lui-même.', imageUrl: 'assets/Spiderman.png' },
    { title: 'The Batman', genre: 'Action, Crime, Drame', director: 'Matt Reeves', duration: "2h56m", description: '"The Batman" est un film de super-héros qui explore une version sombre et réaliste de l univers de Batman. Réalisé par Matt Reeves, il met en vedette Robert Pattinson dans le rôle de Bruce Wayne / Batman. L intrigue suit Batman alors qu il enquête sur une série de meurtres mystérieux à Gotham City, révélant une conspiration impliquant certains des criminels les plus redoutables de la ville, y compris le légendaire Joker.' ,imageUrl: 'assets/The Batman.png' },
    { title: 'Dune', genre: 'Science-fiction, Aventure, Action', director: 'Denis Villeneuve', duration: "2h35m", description: '"Dune" est une épopée de science-fiction réalisée par Denis Villeneuve, adaptée du roman du même nom écrit par Frank Herbert. Le film suit l histoire de Paul Atreides, un jeune noble dont la famille est chargée de gouverner la planète désertique Arrakis, connue pour sa ressource la plus précieuse, le "melange d épices".' , imageUrl: 'assets/Dune.png' },

    { title: 'Venom: Let There Be Carnage', genre: 'Action, Aventure, Science-Fiction', director: 'Andy Serkis', duration: "1h37m", description: '"Venom: Let There Be Carnage" est un film de super-héros réalisé par Andy Serkis, basé sur le personnage de Venom de Marvel Comics. Dans cette suite tant attendue, Eddie Brock (joué par Tom Hardy) tente de coexister avec le symbiote alien Venom, qui habite son corps, tout en jonglant avec les hauts et les bas de leur relation.' ,imageUrl: 'assets/Venom.png' },
    { title: 'Man of Steel', genre: 'Action, Aventure, Science-Fiction', director: 'Zack Snyder', duration: "2h23m", description: '"Man of Steel" est un film de super-héros qui explore les origines emblématiques de l un des personnages les plus légendaires de l histoire des comics, Superman. Réalisé par Zack Snyder, le film suit le voyage de Clark Kent / Superman, interprété par Henry Cavill, depuis son enfance sur la planète Krypton jusqu à son arrivée sur Terre, où il découvre ses pouvoirs surhumains.' ,imageUrl: 'assets/ManOfSteel.png' },
    { title: 'Joker', genre: 'Drame, Thriller, Crime', director: 'Todd Phillips', duration: "2h2m", description: '"Joker" est un film dramatique de 2019 réalisé par Todd Phillips, qui propose une relecture sombre et psychologique de l origine du célèbre ennemi de Batman, le Joker. Le film met en vedette Joaquin Phoenix dans le rôle principal d Arthur Fleck, un comédien de stand-up raté vivant dans la Gotham City des années 1980, une ville en proie à la pauvreté, à la criminalité et à la corruption.' ,imageUrl: 'assets/Joker.png' },

    { title: 'Aquaman et le royaume perdu', genre: 'Action, Aventure, Fantaisie', director: 'James Wan', duration: "Inconnu", description: '"Aquaman et le royaume perdu" est un film de super-héros basé sur le personnage de DC Comics, Aquaman. Réalisé par James Wan, il est la suite du film à succès "Aquaman" sorti en 2018.' ,imageUrl: 'assets/Aquaman.png' },
    { title: 'The Flash', genre: 'Action, Aventure', director: 'Andy Muschietti', duration: "Inconnu", description: '"The Flash" est un prochain film de super-héros basé sur le personnage de DC Comics du même nom. Réalisé par Andy Muschietti, le film mettra en vedette Ezra Miller reprenant son rôle de Barry Allen / The Flash, un super-héros possédant la capacité de se déplacer à des vitesses surhumaines.L intrigue du film explorera le concept du multivers, où différentes réalités parallèles coexistent.' ,imageUrl: 'assets/Flash.png' },
    { title: 'Black Adam', genre: 'Science-fiction, Aventure, Action', director: 'Jaume Collet-Serra', duration: "Inconnu", description: '"Black Adam" est un film de super-héros basé sur le personnage de DC Comics du même nom. Réalisé par Jaume Collet-Serra, le film mettra en vedette Dwayne "The Rock" Johnson dans le rôle principal de Black Adam, un anti-héros doté de pouvoirs magiques et physiques extraordinaires.' ,imageUrl: 'assets/BlackAdam.png' }
  ];


  ngOnInit(): void {
}




  // toggleDescription(film: any) {
  //   film.showDescription = !film.showDescription;
  // }
  showModal(film: any) {
    this.selectedFilm = film; // Stocke les détails du film sélectionné
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }

  constructor() {
    
    this.formGroup = new FormGroup({
  });
  }
  
 

}
