import { IPokemons } from "../../types/pokeTypes";
import './styles.css'

export default function Pokegrid({ pokemons }: { pokemons: IPokemons[] | [] }) {
    return (
        <div className='grid'>
            {pokemons.map(pokemon => (
                <div className='card' key={pokemon.url}>
                    <div>
                        {pokemon.name}
                    </div>
                    <img src={`${pokemon.image}`} />

                </div>
            ))
            }
        </div>
    )
}