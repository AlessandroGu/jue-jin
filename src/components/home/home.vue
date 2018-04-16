<template>
    <div class="home">
        <tabber></tabber>
        <router-view></router-view>
    </div>
</template>
<script>
import tabber from "../tabber/tabber.vue"
export default {
    data () {
        return {

        }
    },
    components: {
        tabber
    }
}
</script>
<style lang="stylus">

</style>
