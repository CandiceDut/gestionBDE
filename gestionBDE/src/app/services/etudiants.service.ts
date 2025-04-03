import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  constructor(private http:HttpClient) { }

  getEtudiants():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>('http://127.0.0.1:8000/api/etudiant');
  }

  getEtudiantById(id:number): Observable<Etudiant>{
    return this.http.get<Etudiant>('http://127.0.0.1:8000/api/etudiant/'+id);
  }

  addEtudiant(nouvEtudiant: Etudiant): Observable<Etudiant> {
    return this.getEtudiants().pipe(
      switchMap(Etudiants =>
      {
      let maxId = 0;
      Etudiants.forEach (Etudiant => { maxId = (Etudiant.idEtud > maxId ? Etudiant.idEtud : maxId); } );
      nouvEtudiant.idEtud = maxId+1;
      return this.http.post<Etudiant>('http://127.0.0.1:8000/api/etudiant', nouvEtudiant);
      }
     ));
     
  }
}
