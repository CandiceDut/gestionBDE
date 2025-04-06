import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Etudiant } from '../models/etudiant.model';
import { Reservation } from '../models/reservation.model';
import { EtudiantsService } from '../services/etudiants.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {
  dataSource = new MatTableDataSource<Etudiant>();
  displayedColumns: string[] = ['idEtud', 'nomEtud', 'prenomEtud', 'email', 'numTel', 'selectionner'];
  etudiants: Etudiant[] = [];

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe((etudiants: Etudiant[]) => {
      this.dataSource.data = etudiants;
    });
  }

  selectionnerEtudiant(etudiant: Etudiant): void {
    console.log('Étudiant sélectionné :', etudiant);
    //this.reservation.idEtud = etudiant.idEtud;
  }

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private etudiantService: EtudiantsService) {
    const breakpointObserver = inject(BreakpointObserver);

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
