import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import {NgModule} from "@angular/core";
import {MonsterHunterComponent} from "./pages/monster-hunter/monster-hunter.component";
import {FinalSpaceComponent} from "./pages/final-space/final-space.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";
import {ValorantComponent} from "./pages/valorant/valorant.component";

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'final-space', component: FinalSpaceComponent },
  { path: 'monster-hunter', component: MonsterHunterComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
