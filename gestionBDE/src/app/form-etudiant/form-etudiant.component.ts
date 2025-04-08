import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/etudiant.model';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-form-etudiant',
  standalone: false,
  templateUrl: './form-etudiant.component.html',
  styleUrl: './form-etudiant.component.scss'
})
export class FormEtudiantComponent implements OnInit {
  formulaire!: FormGroup;
  currentEtudiant!: Etudiant;
  mode: 'ajout' | 'modif' = 'ajout';

  constructor(private Etudiantservice: EtudiantsService, private formBuilder: FormBuilder,private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'modif';
      this.loadEtudiant(+id);
    } else {
      this.mode = 'ajout';
    }

    this.formulaire = this.formBuilder.group({
      nomEtud: [null, [Validators.required, Validators.minLength(2)]],
      prenomEtud: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.minLength(5)]],
      numTel: [null, [Validators.required, Validators.minLength(10)]],
    }, { updateOn: 'blur' });

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentEtudiant = {
        idEtud: 0,
        nomEtud: formValue.nomEtud,
        prenomEtud: formValue.prenomEtud,
        email: formValue.email,
        numTel: formValue.numTel
      };
    });
  }

  loadEtudiant(id: number) {
    this.Etudiantservice.getEtudiantById(id).subscribe(etudiant => {
      this.currentEtudiant = etudiant;
      this.formulaire.patchValue(etudiant);
    });
  }

  ajout(): void {
    if (this.formulaire.invalid) {
      return;  // Ne rien faire si le formulaire est invalide
    }

    const newEtudiant: Etudiant = {
      idEtud: 0,
      nomEtud: this.formulaire.get('nomEtud')?.value,
      prenomEtud: this.formulaire.get('prenomEtud')?.value,
      email: this.formulaire.get('email')?.value,
      numTel: this.formulaire.get('numTel')?.value
    };

    this.Etudiantservice.addEtudiant(newEtudiant).subscribe({
      next: () => {
        this.router.navigateByUrl('/etudiant');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'etudiant :', err);
        alert("Désolé, l\'etudiant n'a pas pu être ajoutée.");
      }
    });
  }

  onSubmit() {
    if (this.mode === 'ajout') {
      this.Etudiantservice.addEtudiant(this.formulaire.value).subscribe(() => {
        this.router.navigate(['/etudiant']);
      });
    } else {
      this.Etudiantservice.updateEtudiant(this.currentEtudiant!.idEtud, this.formulaire.value).subscribe(() => {
        this.router.navigate(['/etudiant']);
      });
    }
  }
}
