import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoireeComponent } from './soiree/soiree.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GoodieComponent } from './goodie/goodie.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewSoireeComponent } from './new-soiree/new-soiree.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'soiree',
    component: SoireeComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'etudiant',
    component: EtudiantComponent
  },
  {
    path: 'goodie',
    component: GoodieComponent
  },
  {
    path: 'createReservation',
    component: NewReservationComponent
  },
  {
    path: 'createSoiree',
    component: NewSoireeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
