import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(p => p.id === +pokemonId);

  //   if (pokemon) {
  //     console.log(`Vous avez demandé le Pokémon ${pokemon.name}`);
  //   } else {
  //     console.log(`Vous avez demandé un Pokémon qui n'existe pas.`);
  //   }
  //   this.pokemonSelected = pokemon;
  // }
}
