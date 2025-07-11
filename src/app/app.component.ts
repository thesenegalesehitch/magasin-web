import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EnteteComponent} from './entete/entete.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magasin-web';
}
