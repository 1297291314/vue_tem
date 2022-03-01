<script setup>
    //  vue 基本版script标签有setup写法
    import {reactive,toRefs,ref,toRef,defineProps,computed,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from 'vue'
    import Test from './test.vue'

    const props = defineProps({// 定义属性的写法
        name: {
            type: Array,
            required: true
        }
    })
    const state = reactive({
        // name: "hujunjie",
        age: 18,
        sex: "男",
        specialTag:computed(()=>{
            return state.age>=18?'成年人':'未成年人'
        })
    })
    const qq  = ref("qq")
    onBeforeMount(()=>{
        console.log('I am onBeforeMount')
    })
    onMounted(()=>{
        console.log('I am onMounted')
        console.log(qq)
    })
    onBeforeUpdate(() => {
        console.log('I am onBeforeUpdate')
    })
    onUpdated(() => {
        console.log('I am onUpdated')
    })
    const methods = {
        testClick(par){
            console.log(par)
            if(par>0){
                state.age += 1
            }else{
                state.age -= 1
            }
        }
    }
    
</script>


<template>
    <div class="test2">
        <div>{{ name }}-{{ age }}-{{ sex }}-{{ specialTag }}</div>
        <button @click="testClick(1)">点击+1</button>
        <button @click="testClick(-1)">点击-1</button>
        <Test ref="qq" />
    </div>
</template>

<style lang="scss" scoped>
    .test2 {
        width: 400px;
        margin: 0 auto;
        button {
            background-color: red;
        }
    }
</style>