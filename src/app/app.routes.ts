import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import {NgModule} from "@angular/core";
import {MonsterHunterComponent} from "./pages/monster-hunter/monster-hunter.component";
import {FinalSpaceComponent} from "./pages/final-space/final-space.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";
import {ValorantComponent} from "./pages/valorant/valorant.component";
import {FsdetailsComponent} from "./pages/final-space-details/fsdetails/fsdetails.component";
import {MsDetailsComponent} from "./pages/monster-hunter-details/ms-details/ms-details.component";
import {PDetailsComponent} from "./pages/pokemon-details/p-details/p-details.component";
import {VDetailsComponent} from "./pages/valorant-details/v-details/v-details.component";
export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'final-space', component: FinalSpaceComponent },
  { path: 'final-space-details/:id', component: FsdetailsComponent },
  { path: 'monster-hunter', component: MonsterHunterComponent },
  { path: 'monster-hunter-details/:id', component: MsDetailsComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemon-details/:id', component: PDetailsComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: 'valorant-details/:id', component: VDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
