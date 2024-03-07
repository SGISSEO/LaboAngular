import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Message } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {


  reservations: any[] = [
    { seat: "A1", status: '', username: "test"},
    { seat: "A2", status: ''},
    { seat: "A3", status: ''},
    { seat: "A4", status: ''},
    { seat: "A5", status: ''},
    { seat: "A6", status: ''},
    { seat: "A7", status: ''},
    { seat: "A8", status: ''},
    { seat: "A9", status: ''},
    { seat: "A10", status: ''},

    { seat: "A11", status: ''},
    { seat: "A12", status: ''},
    { seat: "A13", status: ''},
    { seat: "A14", status: ''},
    { seat: "A15", status: ''},
    { seat: "A16", status: ''},
    { seat: "A17", status: ''},
    { seat: "A18", status: ''},
    { seat: "A19", status: ''},
    { seat: "A20", status: ''},

    { seat: "A21", status: ''},
    { seat: "A22", status: ''},
    { seat: "A23", status: ''},
    { seat: "A24", status: ''},
    { seat: "A25", status: ''},
    { seat: "A26", status: ''},
    { seat: "A27", status: ''},
    { seat: "A28", status: ''},
    { seat: "A29", status: ''},
    { seat: "A30", status: ''},

    { seat: "A31", status: ''},
    { seat: "A32", status: ''},
    { seat: "A33", status: ''},
    { seat: "A34", status: ''},
    { seat: "A35", status: ''},
    { seat: "A36", status: ''},
    { seat: "A37", status: ''},
    { seat: "A38", status: ''},
    { seat: "A39", status: ''},
    { seat: "A40", status: ''},

    { seat: "A41", status: ''},
    { seat: "A42", status: ''},
    { seat: "A43", status: ''},
    { seat: "A44", status: ''},
    { seat: "A45", status: ''},
    { seat: "A46", status: ''},
    { seat: "A47", status: ''},
    { seat: "A48", status: ''},
    { seat: "A49", status: ''},
    { seat: "A50", status: ''},
  ];
  
  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {}
  isReservationPage(): boolean {
    // Vérifiez l'URL actuelle pour voir si l'utilisateur est sur la page de réservation
    return this.router.url.includes('reservation');
  }
  messages: Message[] = []; // Initialisez messages avec un tableau vide
  ngOnInit() {
    this.messages = [{ severity: 'info', summary: 'info', detail: 'Vous devez être connecté pour pouvoir réserver.' }];
}
  reserverSiege(siege: any): void {
    // Vérifiez si l'utilisateur est connecté
    if (!this.userService.isLogged) {
      // Affichez un message d'erreur à l'utilisateur
      return;
    }
    

    // Vérifiez le nombre de réservations actuelles
    if (this.reservations.filter(res => res.status === 'Place réservée').length >= 50) {
      alert('Vous avez déjà réservé le maximum de 50 places.');
      return;
    }

    // Vérifiez si le siège est déjà réservé
    const siegeDejaReserve = this.reservations.find(res => res.seat === siege.seat);
    if (siegeDejaReserve && siegeDejaReserve.status === 'Place réservée') {
      alert('Ce siège est déjà réservé.');
      return;
    }

    // Mettez à jour l'état de la réservation
    siege.status = 'Place réservée';
  }


  resetReservationsForSeat(reservation: any): void {
    // Réinitialisez l'état de réservation
    reservation.status = '';
  }

  resetReservations(): void {
    // Réinitialisez la liste des réservations
    this.reservations.forEach(reservation => reservation.status = '');
    console.log('Réservations réinitialisées.');
  }
}
