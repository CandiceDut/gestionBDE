import { Component, OnInit, Input } from '@angular/core';
import { Soiree } from '../models/soiree.model';
import { SoireesService } from '../services/soirees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soiree',
  standalone: false,
  templateUrl: './soiree.component.html',
  styleUrl: './soiree.component.scss'
})
export class SoireeComponent implements OnInit {

  @Input() Soiree!: Soiree;
  listSoiree!:Soiree[];

  constructor(private mySoireesService: SoireesService, private router: Router){}
  
  ngOnInit():void{
    this.mySoireesService.getSoirees().subscribe((soirees) => {this.listSoiree = soirees;});
  }
  
  goToCreateSoiree(){
    this.router.navigateByUrl('/soireeForm');
  }
  
  goToModifySoiree(id: number) {
    this.router.navigateByUrl(`/soireeForm/${id}`);
  }
  
  deleteLaSoiree(idSoiree: number){
    this.mySoireesService.deleteSoiree(idSoiree).subscribe(() => {
      this.router.navigate(['/soiree']);
    });
  }
}
