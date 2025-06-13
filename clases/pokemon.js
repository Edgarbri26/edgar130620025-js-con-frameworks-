const axios = require('axios');

class Pokemon {
    constructor() {
        this.pokemon = [];
    }

    getPokemon = async (pokemonName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            this.pokemon = response.data.;
            console.log(this.pokemon);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

module.exports = {
    Pokemon
};