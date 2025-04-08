import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant.model';
import { EtudiantsService } from '../services/etudiants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  standalone: false,
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent implements OnInit {

  @Input() Etudiant!: Etudiant;
  listEtudiant!:Etudiant[];

  constructor(private myEtudiantsService: EtudiantsService, private router: Router){}
  
  ngOnInit():void{
    this.myEtudiantsService.getEtudiants().subscribe((Etudiants) => {this.listEtudiant = Etudiants;});
  }
  
  goToCreateEtudiant(){
    this.router.navigateByUrl('/etudiantForm');
  }

  goToModifyEtudiant(id: number){
    this.router.navigateByUrl(`/etudiantForm/${id}`);
  }
  
  deleteLEtudiant(idEtud: number){
    this.myEtudiantsService.deleteEtudiant(idEtud).subscribe(() => {
      this.router.navigate(['/etudiant']);
    });
  }
}
