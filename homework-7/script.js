let demoPokemon = {};
const pokemonContainer = document.querySelector("#pokemon-container");
const updatePokemonButton = document.getElementById("update-pokemon");

// Function to fetch a random Pokemon from the API and update the displayed Pokemon
const getRandomPokemon = () => {
  // Generate a random Pokemon ID
  const totalPokemon = 999;
  const randomInteger = Math.floor(Math.random() * totalPokemon);
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomInteger}`;

  // Fetch data from the API
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {

      demoPokemon.name = data.name;
      demoPokemon.abilities = data.abilities;
      demoPokemon.forms = data.forms;
      demoPokemon.moves = data.moves;


      renderPokemon();
    })
    .catch(error => {
      console.error(error);
    });
};


const renderPokemon = () => {
  let pokeDOM = `
    <div class="pokemon">
      <h2>Name: ${demoPokemon.name.charAt(0).toUpperCase() + demoPokemon.name.slice(1)}</h2>
      <h3>Abilities:</h3>
      <ul class="abilities">`;
  demoPokemon.abilities.forEach(ability => {
    pokeDOM += `<li>${ability.ability.name}</li>`;
  });
  pokeDOM += `</ul>
      <h3>Moves:</h3>
      <ul class="moves">`;
  demoPokemon.moves.forEach(move => {
    pokeDOM += `<li>${move.move.name}</li>`;
  });
  pokeDOM += `</ul>
    </div>`;


  pokemonContainer.innerHTML = pokeDOM;
};


updatePokemonButton.addEventListener('click', getRandomPokemon);


getRandomPokemon();
