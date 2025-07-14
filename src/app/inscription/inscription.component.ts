import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
inscriptionForm : FormGroup=new FormGroup({

  prenom:new FormControl('', [Validators.required]),
  nom:new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('', [Validators.required]),
  adresse:new FormControl('Diamniadio', [Validators.required])


})
  // bouton pour le formulaire pour s'inscrire'
  inscrire(): void {
    console.log("Données formulaires :",this.inscriptionForm.value)
  }
  // bouton pour effacer le formulaire
  cleanForm(): void {
  this.inscriptionForm.reset();
  }
}
