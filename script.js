console.log('hello!');

function hentEnJoke() {
  document.getElementById('Joke').innerHTML = 'Haha';

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let joke = JSON.parse(this.responseText);
    document.getElementById('Joke').innerHTML = joke.value;
  };
  xhttp.open('GET', 'https://api.chucknorris.io/jokes/random', true);
  xhttp.send();
}

/// https://pokeapi.co/api/v2/pokemon/ditto

function hentEnPokemon() {
  document.getElementById('Pokemon').innerHTML = 'Pokemo kommer her.. ';

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let pokemon = JSON.parse(this.responseText);
    document.getElementById('Pokemon').innerHTML = pokemon.id;
  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);
  xhttp.send();
}
