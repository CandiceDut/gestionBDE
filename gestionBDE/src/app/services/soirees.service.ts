import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Soiree } from '../models/soiree.model';

@Injectable({
  providedIn: 'root'
})
export class SoireesService {

  constructor(private http:HttpClient) { }

  getSoirees():Observable<Soiree[]>{
    return this.http.get<Soiree[]>('http://127.0.0.1:8000/api/soiree');
  }

  getSoireeById(id:number): Observable<Soiree>{
    return this.http.get<Soiree>('http://127.0.0.1:8000/api/soiree/'+id);
  }

  addSoiree(nouvSoiree: Soiree): Observable<Soiree> {
    return this.getSoirees().pipe(
      switchMap(Soirees => {
        let maxId = 0;
        Soirees.forEach(Soiree => {
          maxId = (Soiree.idSoiree > maxId ? Soiree.idSoiree : maxId);
        });
        nouvSoiree.idSoiree = maxId + 1;
        return this.http.post<Soiree>('http://127.0.0.1:8000/api/soiree', nouvSoiree);
      })
    );
  }
  
  updateSoiree(idSoiree: number, ModifSoiree: Soiree){
    return this.http.post<Soiree>(`http://127.0.0.1:8000/api/soiree/${idSoiree}`, ModifSoiree);
  }
  
  deleteSoiree(idSoiree: number){
    return this.http.delete<Soiree>(`http://127.0.0.1:8000/api/soiree/${idSoiree}`);
  }
}
