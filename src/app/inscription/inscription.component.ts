import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Inscription} from '../modeles';

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
    const inscription : Inscription = {

      prenom:this.inscriptionForm.get('prenom')?.value,
      nom:this.inscriptionForm.get('nom')?.value,
      email:this.inscriptionForm.get('email')?.value,
      password:this.inscriptionForm.get('password')?.value,
      adresse:this.inscriptionForm.get('adresse')?.value,
      roles:[],
      droits:[]
    }
    console.log("send to spring", inscription)
  }
  // bouton pour effacer le formulaire
  cleanForm(): void {
  this.inscriptionForm.reset();
  }
}
