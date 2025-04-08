import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';
import { Router } from '@angular/router';
import { Etudiant } from '../models/etudiant.model';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {

  @Input() Reservation!: Reservation;
  listReservation!:Reservation[];
  // etudiants: Etudiant[] = [];
  // soirees: Soiree[]=[];
  // etudiant:any;
  // soiree:any;

  constructor(private myReservationsService: ReservationsService, private router: Router){}
  
  ngOnInit():void{
    this.myReservationsService.getReservations().subscribe((reservations) => {this.listReservation = reservations;});
    
    // this.etudiant = this.etudiants.find(etudiant => etudiant.idEtud === this.uneReservation.idEtud);

    // this.soiree = this.soirees.find(soiree => soiree.idSoiree === this.uneReservation.idSoiree);
  }
  
  goToCreateReservation(){
    this.router.navigateByUrl('/reservationForm');
  }
  
  deleteLaReservation(idReserv: number){
    this.myReservationsService.deleteReserv(idReserv).subscribe(() => {
      this.router.navigate(['/reservation']);
    });
  }

}
