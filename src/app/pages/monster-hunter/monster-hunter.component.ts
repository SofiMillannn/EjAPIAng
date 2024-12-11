import {Component, inject} from '@angular/core';
import {FinalSpaceServiceService} from "../../services/FinalSpace/final-space-service.service";
import {FinalSpaceAPI} from "../../common/fsinterface";
import {Assets, MhwInterface} from "../../common/mhw-interface";
import {MhwService} from "../../services/Mhw/mhw.service";
import {RouterLink} from "@angular/router";
import {BottomNavComponent} from "../../bottom-nav/bottom-nav.component";

@Component({
  selector: 'app-monster-hunter',
  standalone: true,
  imports: [
    RouterLink,
    BottomNavComponent
  ],
  templateUrl: './monster-hunter.component.html',
  styleUrl: './monster-hunter.component.css'
})
export class MonsterHunterComponent {
  private service = inject(MhwService);
  apiData!: MhwInterface[];
  assets!: Assets;
  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.service.getWeapons().subscribe(
      {
        next: data =>{
          this.apiData = data;
        },
        error: err => {
          console.error(err);
        },
        complete:() =>{
          console.log('Armas de Monster hunter cargadas :D !')
        }
      }
    )
    this.service.getAssets().subscribe(
      {
        next: data =>{
          this.assets = data;
        },
        error: err => {
          console.error(err);
        },
        complete:() =>{
          console.log('Assets de Monster hunter cargados :D !')
        }
      }
    )
  }

}
