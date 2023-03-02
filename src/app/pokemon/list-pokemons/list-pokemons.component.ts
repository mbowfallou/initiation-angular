import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html'
})
export class ListPokemonsComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemonsList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
