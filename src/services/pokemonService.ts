

export async function getPockemonInfo(){
    const service  = `${import.meta.env.VITE_BACKEND_SERVER}/pokemons`;
    const results = await fetch(service);
    const json = await results.json();

    return json;
}