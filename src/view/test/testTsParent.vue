<script lang="ts" setup>
    // vue，ts setup标签版本
    import { reactive,toRefs,ref,toRef, defineComponent, defineEmits ,defineExpose,defineProps,onMounted,computed,provide,inject} from 'vue'
    // ref只能对非引用类型数据生效
    // reactive对引用类型也生效
    // toRefs为了解决结构解析时出现的代理不生效问题加的
    // toRef给新属性加上响应特性（动态加入,需要两个参数）
    // defineComponent包装对象变成组件(对setup函数进行封装返回options的对象)
    // defineProps 定义参数的语法糖
    // defineEmits 定义事件的语法糖
    // defineExpose 暴露组件内方法供父组件使用
    // provide,inject(同vue)
    import Test2 from './test2.vue'

    const props = defineProps({
        fund:{
            type: String,
            default: "1000"
        }
    })
    onMounted(()=>{
        console.log("I am testTsParent onMounted")
    })
    
    const person = reactive({
        name: 'hujunjie',
        age: 18,
        spescialTag : computed(()=>{
            return person.age<10?'小孩':'不是小孩'
        })
    })
    const changeAge = (parm)=>{
        if(parm<0){
            if(person.age === 0){
                return
            }
            person.age--
        }else{
            person.age++
        }
        // person.age++
    }

</script>

<template>
    <div>
        {{person.name}}-{{person.age}}-{{person.spescialTag}}-{{props.fund}}万
        <button @click="changeAge(-1)">减小</button>
        <button @click="changeAge(1)">增加</button>
        <Test2/>
    </div>
</template>


<style lang="scss">

</style>