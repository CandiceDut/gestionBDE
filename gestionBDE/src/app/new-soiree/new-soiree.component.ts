import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Soiree } from '../models/soiree.model';
import { Router } from '@angular/router';
import { SoireesService } from '../services/soirees.service';

@Component({
  selector: 'app-new-soiree',
  standalone: false,
  templateUrl: './new-soiree.component.html',
  styleUrl: './new-soiree.component.scss'
})
export class NewSoireeComponent implements OnInit {
  formulaire!: FormGroup;
  currentSoiree!: Soiree;

  constructor(private Soireeservice: SoireesService, private formBuilder: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nomSoiree: [null,[Validators.required, Validators.minLength(4)]],
      lieu: [null,[Validators.required, Validators.minLength(6)]],
      dateHeure: [null,[Validators.required]],
      prix: [null,[Validators.required, Validators.min(0)]],
      capaciteMax: [null,[Validators.required, Validators.min(0)]],
      theme: [null,[Validators.required, Validators.minLength(3)]],
    },
    {updateOn: 'blur'}
  );
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

  ajout(){
    let newSoiree: Soiree = {
      idSoiree: 0,
      nomSoiree: this.formulaire.get('nomSoiree')?.value,
      lieu: this.formulaire.get('lieu')?.value,
      dateHeure: this.formulaire.get('dateHeure')?.value,
      prix: this.formulaire.get('prix')?.value,
      capaciteMax: this.formulaire.get('capaciteMax')?.value,
      theme: this.formulaire.get('theme')?.value
    };

    this.Soireeservice.addSoiree(newSoiree).subscribe({
      next : Soiree =>
      {
        this.router.navigateByUrl('/catalog')
      },
      error : err =>
      {
        console.error('Observable ajout CD a émis une erreur : ' + err);
        alert ("Désolé le CD n'a pas pu être ajouté");
      }
    })    
  }
}
