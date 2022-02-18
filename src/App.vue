<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    // import HelloWorld from './components/HelloWorld.vue'
    import Test from './view/test/test.vue'
    import Test2 from './view/test/test2.vue'
    import TestTs from './view/test/testTs.vue'
    import TestTsx from './view/test/testTsx'
    import Testguid from './view/test/testguid.vue'
</script>

<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <Test />
    <Test2 :name="'hellow'" />
    <TestTs />
    <TestTsx />
    <Testguid />
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
