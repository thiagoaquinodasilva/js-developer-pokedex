
// Captura o número do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonNumber = urlParams.get('number');

// Selecione os elementos HTML onde você deseja exibir os detalhes do Pokémon
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonNumberElement = document.getElementById('pokemon-number');
const pokemonTypes = document.getElementById('pokemon-types');

// Faça uma solicitação à API PokeAPI para obter os detalhes do Pokémon com base no número
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((response) => response.json())
    .then((pokemonData) => {
        // Atualize os elementos HTML com os detalhes do Pokémon
        pokemonImage.src = pokemonData.sprites.other.dream_world.front_default;
        pokemonName.textContent = pokemonData.name;
        pokemonNumberElement.textContent = `#${pokemonData.id}`;
        
        // Limpe a lista de tipos existente
        pokemonTypes.innerHTML = '';

        // Preencha a lista de tipos
        pokemonData.types.forEach((typeData) => {
            const typeElement = document.createElement('li');
            typeElement.textContent = typeData.type.name;
            pokemonTypes.appendChild(typeElement);
        });
    })
    .catch((error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
    });

    
