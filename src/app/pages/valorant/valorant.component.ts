import {Component, inject} from '@angular/core';
import {MhwService} from "../../services/Mhw/mhw.service";
import {Assets, MhwInterface} from "../../common/mhw-interface";
import {Character, ValorantAPI} from "../../common/valorant-interface";
import {ValorantService} from "../../services/Valorant/valorant.service";
import {RouterLink} from "@angular/router";
import {BottomNavComponent} from "../../bottom-nav/bottom-nav.component";

@Component({
  selector: 'app-valorant',
  standalone: true,
  imports: [
    RouterLink,
    BottomNavComponent
  ],
  templateUrl: './valorant.component.html',
  styleUrl: './valorant.component.css'
})
export class ValorantComponent {
  private service = inject(ValorantService);
  apiData!: ValorantAPI;
  constructor() {
    this.loadAgents();
  }

  private loadAgents() {
    this.service.getAgents().subscribe(
      {
        next: data => {
          this.apiData = data;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Agentes cargados :D !')
        }
      }
    )
  }

  protected readonly Symbol = Symbol;
}
