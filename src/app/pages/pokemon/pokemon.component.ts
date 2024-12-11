import {Component, inject} from '@angular/core';

import {Pokemon, PokemonAPI} from "../../common/pokemon-interface";
import {PokemonServiceService} from "../../services/Pokemon/pokemon-service.service";
import {RouterLink} from "@angular/router";
import {BottomNavComponent} from "../../bottom-nav/bottom-nav.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    RouterLink,
    BottomNavComponent
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  private service = inject(PokemonServiceService);
  apiData!: PokemonAPI;
  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.service.getPokemons().subscribe(
      {
        next: data => {
          this.apiData = data;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Pokemons cargados :D !')
        }
      }
    )
  }
}
