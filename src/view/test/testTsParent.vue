<script lang="ts" setup>
    // vue，ts setup标签版本
    import { reactive,toRefs,ref,toRef, defineComponent, defineEmits ,defineExpose,defineProps,onMounted,computed,provide,inject} from 'vue'
    // ref只能对非引用类型数据生效
    // reactive只对引用类型生效
    // 明确的对象，明确的属性，用reactive，其他用 ref

    // toRefs为了解决结构解析时出现的代理不生效问题加的, ...toRefs()
    // toRef给新属性加上响应特性（动态加入,需要两个参数）
    // 使用场景 toRef 传入两个参数 第一个值 需要监听的对象名，第二个值 需要动态改变的属性

    // defineComponent包装对象变成组件(对setup函数进行封装返回options的对象)
    // defineProps 定义参数的语法糖
    // defineEmits 定义事件的语法糖
    // defineExpose 暴露组件内方法供父组件使用
    // provide(父),inject（子），同vue2，子组件可以直接使用
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
    const provide1 = provide("for1",1)
    const changeAgePro = provide("changeAge",changeAge)

</script>

<template>
    <div>
        {{person.name}}-{{person.age}}-{{person.spescialTag}}-{{props.fund}}万
        <button @click="changeAge(-1)">减小</button>
        <button @click="changeAge(1)">增加</button>
        <Test2 :noDefined="1" :name="'hellow'"><template v-slot:qq="prop">slot:{{prop.name1}}</template></Test2>
    </div>
</template>


<style lang="scss">

</style>