<template>
  <div id="app">
    <div id="nav">
      // не стал бы делать что-то подобное в реальном проекте, но по условию задания ссылки на adding и removal
      // должны быть на главной странице, хотя это филтрация уровня History. В качестве компромиса вставил это в меню
      <router-link to="/">Home</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/history?type=adding">Add history</router-link> |
      <router-link to="/history?type=removal">Remove history</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

main-color = #507BE8

html, body
  margin 0
  padding 0

#nav
  margin 16px 0 26px
  color #cad9f3

  a
    color #99afe6
    font-size 14px
    font-weight 600
    text-transform uppercase
    text-decoration none

    &:hover, &:active, &.router-link-exact-active
      color #507be8

#app
  font-family 'Source Sans Pro', sans-serif
  text-align center
  color #2c3e50
  margin-top 60px


// COMPONENTS

.card
  margin 8px
  padding 20px 10px
  background: #FFFFFF;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.20), 0 4px 10px 0 rgba(59,65,94,0.10);
  border-radius: 8px;

.text-field
  padding 0 8px
  height 32px
  font-size: 15px
  border-radius 6px
  border 1px solid #E4EAF4
  
  &::placeholder
    color #bdc6d6

.btn
  margin 0 8px
  border-width 1px
  border-radius 6px
  outline none
  font-size 15px
  font-weight bold
  cursor pointer

  &-link
    min-width 25px
    border-color transparent
    background none
    color main-color

    &:hover
      border 1px solid main-color
</style>
