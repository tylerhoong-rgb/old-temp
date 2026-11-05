import {RandomTeamsTypes} from '../../random-teams';
import {PokemonSets} from './custom-random-sets.json'; // Import your custom sets

export const randomNatDexTeam: RandomTeamsTypes['randomTeam'] = function (options) {
  const dex = this.dex;
  const team = [];
  
  // Example: Use Pokémon from your custom-random-sets.json
  const speciesPool = Object.keys(PokemonSets);
  
  for (let i = 0; i < 6; i++) {
    const species = dex.species.get(speciesPool[this.random(speciesPool.length)]);
    const setData = PokemonSets[species.id];
    
    team.push({
      name: species.baseSpecies,
      species: species.name,
      moves: setData.sets[0].movepool.slice(0, 4), // Pick first 4 moves
      ability: setData.sets[0].abilities[0],
      evs: setData.sets[0].evs,
      nature: setData.sets[0].nature,
      item: setData.sets[0].item || 'Leftovers', // Fallback item
    });
  }
  return team;
};
