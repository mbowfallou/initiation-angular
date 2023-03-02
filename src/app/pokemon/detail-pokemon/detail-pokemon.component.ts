import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pkm => this.pokemon = pkm);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonsList());
  }

  goToPokemonsList(){
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon/edit', pokemon.id]);
  }
}