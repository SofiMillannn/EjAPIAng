import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonAPI} from "../../common/pokemon-interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {


  private readonly URL = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=20'
  private http = inject(HttpClient);
  getPokemons(): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(this.URL)
  }
}
