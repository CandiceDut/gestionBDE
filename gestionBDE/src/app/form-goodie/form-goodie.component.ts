import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Goodie } from '../models/goodie.model';
import { GoodiesService } from '../services/goodies.service';

@Component({
  selector: 'app-form-goodie',
  standalone: false,
  templateUrl: './form-goodie.component.html',
  styleUrl: './form-goodie.component.scss'
})
export class FormGoodieComponent implements OnInit {
  formulaire!: FormGroup;
  currentGoodie!: Goodie;
  mode: 'ajout' | 'modif' = 'ajout';

  constructor(private Goodieservice: GoodiesService, private formBuilder: FormBuilder,private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'modif';
      this.loadEtudiant(+id);
    } else {
      this.mode = 'ajout';
    }

    this.formulaire = this.formBuilder.group({
      nomGoodie: [null, [Validators.required, Validators.minLength(2)]],
      quantite: [null, [Validators.required, Validators.min(1)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      coutUnitaire: [null, [Validators.required, Validators.min(1)]],
    }, { updateOn: 'blur' });

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentGoodie = {
        idGoodie: 0,
        nomGoodie: formValue.nomGoodie,
        quantite: formValue.quantite,
        description: formValue.description,
        coutUnitaire: formValue.coutUnitaire
      };
    });
  }

  loadEtudiant(id: number) {
    this.Goodieservice.getGoodieById(id).subscribe(goodie => {
      this.currentGoodie = goodie;
      this.formulaire.patchValue(goodie);
    });
  }

  ajout(): void {
    if (this.formulaire.invalid) {
      return;  // Ne rien faire si le formulaire est invalide
    }

    const newGoodie: Goodie = {
      idGoodie: 0,
      nomGoodie: this.formulaire.get('nomGoodie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      description: this.formulaire.get('description')?.value,
      coutUnitaire: this.formulaire.get('coutUnitaire')?.value
    };

    this.Goodieservice.addGoodie(newGoodie).subscribe({
      next: () => {
        this.router.navigateByUrl('/goodie');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du goodie :', err);
        alert("Désolé, le goodie n'a pas pu être ajoutée.");
      }
    });
  }

  onSubmit() {
    if (this.mode === 'ajout') {
      this.Goodieservice.addGoodie(this.formulaire.value).subscribe(() => {
        this.router.navigate(['/goodie']);
      });
    } else {
      this.Goodieservice.updateGoodie(this.currentGoodie!.idGoodie, this.formulaire.value).subscribe(() => {
        this.router.navigate(['/goodie']);
      });
    }
  }

}
