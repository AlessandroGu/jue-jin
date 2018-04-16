<template>
  <div id="app">
    <router-view></router-view> 
    <banner></banner>
  </div>
</template>

<script>
import banner from './components/banner/banner.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    banner
  }
}
</script>

<style lang="less">

</style>
