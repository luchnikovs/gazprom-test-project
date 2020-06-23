export default {
  state: {
    pokemons: [],
    selectedPokemons: []
  },
  mutations: {
    setPokemons (state, pokemon) {
      state.pokemons = pokemon.results
        // Добавляем id, т.к. не нашел открытый апи с подходящей структурой
        .map((item, index) => Object.assign(item, {id: index + 1}))
    },
    addSelectedPokemon (state, pokemon) {
      state.selectedPokemons.push(pokemon)
    },
    removeSelectedPokemon (state, index) {
      state.selectedPokemons.splice(index, 1)
    }
  },
  actions: {
    async getPokemons ({commit}, limit = 100) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)

      commit('setPokemons', await response.json())
    }
  }
}