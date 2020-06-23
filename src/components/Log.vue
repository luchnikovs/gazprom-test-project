<template>
  <div class="log">
    <div class="card log__card">
      <div
        v-for="(item, index) in logList"
        :class="['log__item', item.type === 'adding' ? 'log__item--green' : 'log__item--red']"
        :key="item.id + `${index}`"
      >
        <span class="log__item-type">{{item.type}}</span>
        <span class="log__item-name">{{item.name}}</span> | 
        <span class="log__item-date">{{getDate(item)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Log',
  props: {
    collection: {
      type: Array,
      required: true
    }
  },
  computed: {
    logList () {
      const type = this.$route.query.type
      if (type === undefined) return this.collection

      return this.collection.filter(item => {
        switch (type) {
          case 'adding': return item.type === 'adding'
          case 'removal': return item.type === 'removal'
          default: return true
        }
      })
    }
  },
  methods: {
    getDate (item) {
      const date = new Date(item.date)
      const day = date.getDate() > 9 ? date.getDate() + 1 : '0' + date.getDate()
      const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      const year = date.getFullYear()
      const hourse = date.getHours() > 9 ? date.getHours() + 1 : '0' + date.getHours()
      const minutes = date.getMinutes() > 9 ? date.getMinutes() + 1 : '0' + date.getMinutes()
      const seconds = date.getSeconds() > 9 ? date.getSeconds() + 1 : '0' + date.getSeconds()

      return `${day}.${month}.${year}  ${hourse}:${minutes}:${seconds}`
    }
  }
}
</script>

<style scoped lang="stylus">
.log
  display flex
  justify-content center

  &__card
    width 300px

  &__item
    padding 2px 0

    &-type
      padding 0 4px
      margin-right 8px
      border 1px solid
      border-radius 6px
      font-size 12px
      text-transform uppercase
      font-weight 600

    &-name
      text-transform capitalize

    &--green
      color: #72AF32

    &--red
      color: #D35959
</style>
