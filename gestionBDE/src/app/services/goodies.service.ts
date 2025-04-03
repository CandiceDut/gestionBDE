import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Goodie } from '../models/goodie.model';

@Injectable({
  providedIn: 'root'
})
export class GoodiesService {

  constructor(private http:HttpClient) { }

  getGoodies():Observable<Goodie[]>{
    return this.http.get<Goodie[]>('http://127.0.0.1:8000/api/stockGoodie');
  }

  getGoodieById(id:number): Observable<Goodie>{
    return this.http.get<Goodie>('http://127.0.0.1:8000/api/stockGoodie/'+id);
  }

  addGoodie(nouvGoodie: Goodie): Observable<Goodie> {
    return this.getGoodies().pipe(
      switchMap(Goodies =>
      {
      let maxId = 0;
      Goodies.forEach (Goodie => { maxId = (Goodie.idGoodie > maxId ? Goodie.idGoodie : maxId); } );
      nouvGoodie.idGoodie = maxId+1;
      return this.http.post<Goodie>('http://127.0.0.1:8000/api/stockGoodie', nouvGoodie);
      }
     ));
     
  }
}
