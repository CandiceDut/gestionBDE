import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Etudiant } from '../models/etudiant.model';
import { Reservation } from '../models/reservation.model';
import { EtudiantsService } from '../services/etudiants.service';
import {MatTableDataSource} from '@angular/material/table';
import { ReservationsService } from '../services/reservations.service';
import { Soiree } from '../models/soiree.model';
import { SoireesService } from '../services/soirees.service';

@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dataSource = new MatTableDataSource<Etudiant>();
  dataSourceSoiree = new MatTableDataSource<Soiree>();
  displayedColumns: string[] = ['nomEtud', 'prenomEtud', 'email', 'selectionner'];
  displayedColumnsSoiree: string[] = ['nomSoiree', 'lieu', 'theme', 'capaciteMax', 'selectionner'];
  etudiants: Etudiant[] = [];
  soirees: Soiree[] = [];
  selectedEtudiant: Etudiant | null = null;
  selectedSoiree: Soiree | null = null;

  private _formBuilder = inject(FormBuilder);

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private etudiantService: EtudiantsService,private soireeService: SoireesService,private reservationService: ReservationsService, private route: ActivatedRoute, private router : Router) {
    const breakpointObserver = inject(BreakpointObserver);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe((etudiants: Etudiant[]) => {
      this.dataSource.data = etudiants;
    });
    this.soireeService.getSoirees().subscribe((soirees: Soiree[]) => {
      this.dataSourceSoiree.data = soirees;
    });
  }

  selectionnerEtudiant(etudiant: Etudiant): void {
    this.selectedEtudiant = etudiant;
    console.log(this.selectedEtudiant);
  }

  selectionnerSoiree(soiree: Soiree): void {
    this.selectedSoiree = soiree;
    console.log(this.selectedSoiree);
  }

  ajout(): void {
    if (!this.selectedEtudiant) {
      console.error('Aucun étudiant sélectionné.');
      return;
    }
    if (!this.selectedSoiree) {
      console.error('Aucune soirée sélectionné.');
      return;
    }
    const today = new Date();
    let formattedDateHeure = today.toISOString().replace('T', ' ').substring(0, 19);

    const newReservation: Reservation = {
      idReserv: 0,
      idEtud: this.selectedEtudiant.idEtud,
      idSoiree: this.selectedSoiree.idSoiree,
      dateReserv: formattedDateHeure,
      statusReserv: 'En attente'
    };
    console.log(this.selectedEtudiant.idEtud);
    console.log(this.selectedSoiree.idSoiree);
  
    this.reservationService.addReservation(newReservation).subscribe({
      next: () => {
        this.router.navigateByUrl('/reservation');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réservation :', err);
        alert("Désolé, la réservation n'a pas pu être ajoutée.");
      }
    });
  }
}
