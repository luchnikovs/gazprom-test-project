<template>
  <div class="list">
    <div class="card list__column">
      <input
        v-model="filter"
        class="text-field filter"
        type="text"
        placeholder="Filter" />
      <div class="list__column-item" v-for="item in allItems" :key="item.id">
        <span class="list__item-text">{{item.name}}</span>
        <button class="btn btn-link" @click="addItem(item)">+</button>
      </div>
    </div>
    <div class="card list__column">
      <div class="list__column-item" v-for="(item, index) in selectedItems" :key="item.id">
        <span class="list__item-text">{{item.name}}</span>
        <button class="btn btn-link" @click="removeItem(index)">-</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import {setStorage} from '@/helpers.js'

export default {
  name: 'List',
  data () {
    return {
      filter: ''
    }
  },
  props: {
    collection: {
      type: Array,
      required: true
    }
  },
  computed: {
    allItems () {
      if (this.selectedItems.length === 0 && !this.filter) return this.collection

      const result = this.collection.filter(colItem => {
          const regExp = RegExp(this.filter, 'gi')
          return !this.selectedItems.some(selItem => colItem.id === selItem.id) && regExp.test(colItem.name)
        })

      if (this.filter) {
        return result.sort((itemA, itemB) => {
          if (itemA.name < itemB.name) {
            return 1
          }
          if (itemA.name > itemB.name) {
            return -1
          }
          return 0
        })
      } else {
        return result
      }
    },
    selectedItems () {
      return this.$store.state.home.selectedPokemons
    }
  },
  methods: {
    addItem (item) {
      // решил, что лучше будет записывать это состояние в хранилище, так логичнее
      setStorage('history', Object.assign({}, item, {date: new Date(), type: 'adding'}))
      // а эти данные в стор, т.к. приятнее работать с этим ui, когда состояние колонок сохраняется при переходе к history
      this.$store.commit('addSelectedPokemon', item)
    },
    removeItem (index) {
      setStorage('history', Object.assign({}, this.selectedItems[index], {date: new Date(), type: 'removal'}))
      this.$store.commit('removeSelectedPokemon', index)
    }
  }
}
</script>

<style scoped lang="stylus">
.filter
  margin-bottom 16px

.list
  display flex
  flex-basis 400px
  justify-content center

  &__column
    flex-basis 200px

  &__column-item
    padding 4px 0

  &__item-text
    text-transform capitalize

</style>
