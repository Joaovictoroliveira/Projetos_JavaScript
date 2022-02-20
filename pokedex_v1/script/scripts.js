const pokemon = document.querySelector('#nome_pokemon');
const btn = document.querySelector('#btn_buscar');
const cardPokemon = document.querySelector('#card_pokemon');

btn.addEventListener('click',(e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then((resp) => resp.json())
    .then((data) => {
        cardPokemon.innerHTML = `
            <div class="card">
                <div class="card_content">
                    <img src="${data.sprites.other.dream_world.front_default}" alt="" />
                    <div class="pokedex_buttons">
                        <div class="circle"></div>
                        <div class="rectangle"></div>
                        <div class="rectangle"></div>
                    </div>
                    <div class="pokemon_content">
                        <p class="pokemon_id">Nº ${data.id}</p>
                        <p class="pokemon_name"><span>Nome:</span> ${data.name}</p>
                        <p class="pokemon_type"><span>Tipo:</span> ${data.types[0].type.name}</p>
                    </div>
                </div>
            </div>
        `;
        pokemon.value = '';
        pokemon.focus();
    })
    .catch((error) => {
        alert('Ops... Algo deu errado!')
        console.error(error);
        pokemon.value = '';
        pokemon.focus();
    });
})
