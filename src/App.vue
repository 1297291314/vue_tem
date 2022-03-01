<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    // import HelloWorld from './components/HelloWorld.vue'
    // import Test from './view/test/test.vue'
    // import Test2 from './view/test/test2.vue'
    // import Test3 from './view/test/test3.vue'
    // import TestTs from './view/test/testTs.vue'
    import TestTsx from './view/test/testTsx'
    // import Testguid from './view/test/testguid.vue'
    // import testTsParentVue from './view/test/testTsParent.vue'

    import {ref} from 'vue'
    const refstate = ref(50)
    const changeFund = () =>{
        refstate.value++
    }
</script>

<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <!-- 1.Test<Test /> -->
    <!-- 2.Test2<Test2 :noDefined="1" :name="'hellow'"><template v-slot:qq="prop">123</template></Test2> -->
    <!-- 3.Test2<Test2 />-->
    <!-- 4.Test3<Test3 :name="'test3'"/>-->
    <!-- 4.TestTs<TestTs :name="'testTs'"/> -->
    5.TestTsx<TestTsx :realName="'龙傲天'"/>
    <!-- 6.Testguid<Testguid /> -->
    <!-- 7.testTsParentVue<testTsParentVue :fund="refstate"/> -->
    <button @click="changeFund">点击</button>
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
