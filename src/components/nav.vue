<template>
    <nav>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style lang="scss" scoped>

</style>