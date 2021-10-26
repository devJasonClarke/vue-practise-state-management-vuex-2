<template>
  <div>
    <Nav />
<router-view />
  </div>
</template>

<script>
import Nav from '@/components/nav'
  export default {
    components:{
      Nav
    }
  }
</script>

<style lang="scss" scoped>

</style>