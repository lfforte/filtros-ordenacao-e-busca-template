import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState, keyboardKey } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

function App() {

  const [buscaId, setBuscaId] = useState({ id: "" });

  const buscaPorId = (e) => {
    setBuscaId(e.target.value);
  }

  const fazerBuscaPorId = pokemons
    .filter((pokemon) => buscaId.id !== '' && pokemon.id === buscaId)
    .map((pokemon) => (
      <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
      />
    ))

  return (
    <>
      <GlobalStyle />
      <Header
        buscaPorId={buscaPorId}
        buscaId={buscaId}
        /* busca_PorNome={buscaPorNome}
        busca_Nome={buscaNome} */
        fazerBuscaPorId={fazerBuscaPorId}
      />
      <CardsContainer>
        {fazerBuscaPorId}
        {/* {pokemons.map((pokemon) => {
          return <PokemonCard
            cardColor={getColors(pokemon.type[0])}
            key={pokemon.id}
            pokemon={pokemon}
          />
        })} */}
      </CardsContainer>
    </>
  );
}

export default App;
