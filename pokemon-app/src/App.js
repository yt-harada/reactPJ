import { useEffect, useState } from 'react';
import './App.css';
import { getALLPokemon, getPokemon } from './utils/pokemon.js';
import Card from './components/Card/Card.js';


function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');
  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getALLPokemon(initialURL);

      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      console.log(res.results);
      //console.log(res);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []); 

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) =>{
        let PokemonRecord = getPokemon(pokemon.url);
        return PokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handleNextPage = async() => {
    setLoading(true);
    let data = await getALLPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };
  const handlePrevPage = async() => {
    if(!prevURL) return;

    setLoading(true);
    let data = await getALLPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  //console.log(pokemonData);
  return    <div className="App">
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
        <div className="btn">
          <button onClick={handlePrevPage}>前へ</button>
          <button onClick={handleNextPage}>次へ</button>
        </div>
      </>
    )}
  </div>;
}

export default App;
