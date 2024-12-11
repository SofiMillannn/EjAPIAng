import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {RouterLink} from "@angular/router";
import {BottomNavComponent} from "../../bottom-nav/bottom-nav.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    AppComponent,
    RouterLink,
    BottomNavComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
