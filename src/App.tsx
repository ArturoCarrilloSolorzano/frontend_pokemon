import './App.css'
import usePokemons from './hooks/usePokemons'
import Pokegrid from './components/pokegrid';

function App() {

  const { pokemons } = usePokemons();



  return (
    <div>
      Pokedex
      <Pokegrid pokemons={pokemons} />
    </div>
  )
}

export default App
