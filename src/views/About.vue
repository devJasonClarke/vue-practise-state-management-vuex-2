<template>
  <div>
<h1>{{countTwo}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters({countTwo:'CounterTwo/countTwo'})
    },
    
  }
</script>

<style lang="scss" scoped>

</style>