import React from "react";
import { Container } from "./styles";


const Header = ({ buscaId, busca_Nome, buscaPorId, busca_PorNome, teclaEnter }) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input htmlFor="buscaId"
        id="buscaId"
        type="number"
        placeholder="Buscar por id"
        value={buscaId.id}
        onChange={buscaPorId}
        onKeyUp={teclaEnter}
      />
      <input htmlFor="buscaNome"
        id="buscaNome"
        type="text"
        placeholder="Buscar por nome"
      /* value={busca_Nome}
      onChange={busca_PorNome}
      onKeyUp={teclaEnter} */
      />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
