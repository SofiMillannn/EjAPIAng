import { Component, inject } from '@angular/core';
import {FinalSpaceServiceService} from "../../services/FinalSpace/final-space-service.service";
import {FinalSpaceAPI} from "../../common/fsinterface";

@Component({
  selector: 'app-final-space',
  standalone: true,
  imports: [],
  templateUrl: './final-space.component.html',
  styleUrl: './final-space.component.css'
})
export class FinalSpaceComponent {
 private service = inject(FinalSpaceServiceService);
 apiData!: FinalSpaceAPI[];
 constructor() {
   this.loadCharacters();
 }

  private loadCharacters() {
    this.service.getCharacters().subscribe(
      {
        next: data =>{
          this.apiData = data;
        },
        error: err => {
          console.error(err);
        },
        complete:() =>{
          console.log('Personajes de Final Space cargados :D !')
        }
      }
    )
  }
}
