import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Soiree } from '../models/soiree.model';
import { Router } from '@angular/router';
import { SoireesService } from '../services/soirees.service';

@Component({
  selector: 'app-new-soiree',
  standalone: false,
  templateUrl: './new-soiree.component.html',
  styleUrls: ['./new-soiree.component.scss']
})
export class NewSoireeComponent implements OnInit {
  formulaire!: FormGroup;
  currentSoiree!: Soiree;

  constructor(private Soireeservice: SoireesService, private formBuilder: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nomSoiree: [null, [Validators.required, Validators.minLength(4)]],
      lieu: [null, [Validators.required, Validators.minLength(6)]],
      dateHeure: [null, [Validators.required]],
      prix: [null, [Validators.required, Validators.min(0)]],
      capaciteMax: [null, [Validators.required, Validators.min(0)]],
      theme: [null, [Validators.required, Validators.minLength(3)]],
    }, { updateOn: 'blur' });

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentSoiree = {
        idSoiree: 0,
        nomSoiree: formValue.nomSoiree,
        lieu: formValue.lieu,
        dateHeure: formValue.dateHeure,
        prix: formValue.prix,
        capaciteMax: formValue.capaciteMax,
        theme: formValue.theme
      };
    });
  }

  ajout(): void {
    if (this.formulaire.invalid) {
      return;  // Ne rien faire si le formulaire est invalide
    }

    let dateHeure = new Date(this.formulaire.get('dateHeure')?.value);

    let formattedDateHeure = dateHeure.toISOString().replace('T', ' ').substring(0, 19);

    const newSoiree: Soiree = {
      idSoiree: 0,
      nomSoiree: this.formulaire.get('nomSoiree')?.value,
      lieu: this.formulaire.get('lieu')?.value,
      dateHeure: formattedDateHeure,
      prix: this.formulaire.get('prix')?.value,
      capaciteMax: this.formulaire.get('capaciteMax')?.value,
      theme: this.formulaire.get('theme')?.value
    };

    this.Soireeservice.addSoiree(newSoiree).subscribe({
      next: () => {
        this.router.navigateByUrl('/soiree');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la soirée :', err);
        alert("Désolé, la soirée n'a pas pu être ajoutée.");
      }
    });
  }
}
