import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http:HttpClient) { }

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://127.0.0.1:8000/api/reservation');
  }

  getReservationById(id:number): Observable<Reservation>{
    return this.http.get<Reservation>('http://127.0.0.1:8000/api/reservation/'+id);
  }

  addReservation(nouvReservation: Reservation): Observable<Reservation> {
    return this.getReservations().pipe(
      switchMap(Reservations =>
      {
      let maxId = 0;
      Reservations.forEach (Reservation => { maxId = (Reservation.idReserv > maxId ? Reservation.idReserv : maxId); } );
      nouvReservation.idReserv = maxId+1;
      return this.http.post<Reservation>('http://127.0.0.1:8000/api/reservation', nouvReservation);
      }
     ));
     
  }
  
  deleteReserv(idReserv: number){
    return this.http.delete<Reservation>(`http://127.0.0.1:8000/api/reservation/${idReserv}`);
  }
}
