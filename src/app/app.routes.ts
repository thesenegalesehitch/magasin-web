import { Routes } from '@angular/router';
import {createComponent} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ListeMagasinComponent} from './liste-magasin/liste-magasin.component';
import {ConnexionComponent} from './connexion/connexion.component';

export const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'inscription', component:InscriptionComponent},
  {path:'magasin', component:ListeMagasinComponent},
  {path:'connexion', component:ConnexionComponent}
];
