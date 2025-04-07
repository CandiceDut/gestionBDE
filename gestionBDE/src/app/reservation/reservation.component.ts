import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {

  @Input() Reservation!: Reservation;
  listReservation!:Reservation[];

  constructor(private myReservationsService: ReservationsService, private router: Router){}
  
  ngOnInit():void{
    this.myReservationsService.getReservations().subscribe((reservations) => {this.listReservation = reservations;});
  }
  
  goToCreateReservation(){
    this.router.navigateByUrl('/reservationForm');
  }
}
