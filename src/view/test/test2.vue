<script>
    import {reactive,toRefs,computed,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from 'vue'
    export default{
        name: 'testMySelf',
        setup(){
            const state = reactive({
                name: "hujunjie",
                age: 18,
                sex: "男",
                specialTag:computed(()=>{
                    return state.age>=18?'成年人':'未成年人'
                }),

            })
            onBeforeMount(()=>{
                console.log('I am onBeforeMount')
            })
            onMounted(()=>{
                console.log('I am onMounted')
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
            return{
                ...toRefs(state),
                ...methods
            }
        }
    }
</script>


<template>
    <div class="test2">
        <div>{{ name }}-{{ age }}-{{ sex }}-{{ specialTag }}</div>
        <button @click="testClick(1)">点击+1</button>
        <button @click="testClick(-1)">点击-1</button>
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