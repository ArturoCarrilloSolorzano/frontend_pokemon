import { useEffect, useState } from 'react';
import { IPokemons } from '../types/pokeTypes';
import { getPockemonInfo } from '../services/pokemonService';

export default function usePokemons(){

    const [pokemons, setPokemons] = useState<[] | IPokemons[]>([]);

    useEffect(() => {
        getPockemon();
      }, [])

    const getPockemon = async () => {
        //const response = pokemon;
        const results = await getPockemonInfo();
        console.log({results});
        setPokemons(results)
    }

    return{
        getPockemon,
        pokemons
    }
}