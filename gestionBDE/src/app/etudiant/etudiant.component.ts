import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant.model';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  standalone: false,
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent implements OnInit {

  @Input() Etudiant!: Etudiant;
  listEtudiant!:Etudiant[];

  constructor(private myEtudiantsService: EtudiantsService){}
  
  ngOnInit():void{
    this.myEtudiantsService.getEtudiants().subscribe((Etudiants) => {this.listEtudiant = Etudiants;});
  }
}
