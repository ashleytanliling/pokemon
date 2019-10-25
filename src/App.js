import React from "react";
import "./App.css";

const PokemonCard = props => {
  const pokemon = props.pokemon;
  const pokemonTypesArray = props.pokemon.type;
  const pokemonTypesListing = () => {
    return pokemonTypesArray.map(type => (
      <span key={type} className={type}>
        {type}
      </span>
    ));
  };

  return (
    <div className="pokemon" data-testid="PokemonCard">
      <img
        className="image"
        alt=""
        src={require(`./pokemon/${pokemon.id}.png`)}
      ></img>
      <h1>{pokemon.name.english}</h1>
      <p>{pokemonTypesListing()}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defence: {pokemon.base.Defence}</p>
      <p>SpAttack: {pokemon.base.SpAttack}</p>
      <p>SpDefence: {pokemon.base.SpDefence}</p>
      <p>Speed: {pokemon.base.Speed}</p>
    </div>
  );
};

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: []
    };
  }

  componentDidMount() {
    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(res => res.json())
      .then(resInJson => {
        this.setState(state => ({ pokemonData: resInJson }));
      });
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        {this.state.pokemonData.map(item => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
