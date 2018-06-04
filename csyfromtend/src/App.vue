<template>
  <div id="app">
   <router-view/>
    <FootGuide></FootGuide>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/footGuide'
export default {
    comments:{
      FootGuide
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
