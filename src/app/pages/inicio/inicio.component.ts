import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    AppComponent,
    RouterLink
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
