import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  {path:'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  {path:'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
  {path:'pokemons', component: ListPokemonsComponent, canActivate: [AuthGuard]},
  {path:'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonsComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
