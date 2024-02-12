import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SeanceComponent } from './seance/seance.component';
import { FilmComponent } from './film/film.component';
import { ReservationComponent } from './reservation/reservation.component';
const routes: Routes = [
  
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'seances', component: SeanceComponent },
    { path: 'films', component: FilmComponent },
    { path: 'reservation', component: ReservationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
