<template>
  <div class="home">
    <List :collection="pokemons" />
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('getPokemons')
  },
  computed: {
    pokemons () {
      return this.$store.state.home.pokemons
    }
  },
  components: {
    List
  }
}
</script>
