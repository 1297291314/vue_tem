<script>
//  vue2中延续的options API写法（适合中小项目写法）
// （我们会在一个vue文件中methods，computed，watch，data中等等定义属性和方法，共同处理页面逻辑）
// 但是大项目容易一个methods中可能有很多其他业务的功能
// 推荐使用vue3提供的 Composition API（根据逻辑功能来组织的）
export default {
    name:'testguid',
    props:{
        prop:{
            required: false,
            default: 'testguid'
        }
    },
    data() {
        return {
            greeting: 'Hello World!',
            array:[1,2,4]
        }
    },
    methods:{
        changeArray(){
            if(this.array.length==3){
                console.log(this.array.splice(2,1))
            }else{
                this.array[1]= "dd"// vue3数据响应的好处
            }
        }
    },
    computed:{
        changeStr(){ 
            return this.array.length===3?"你变了":"变帅了也变短了"
        }
    },
    beforeCreate(){
        console.log("I am beforeCreate")
    },
    // mounted旧版写法，onMounted新版写法
    mounted(){
        console.log("I am mounted")
        console.log(this.$refs.change)
    },
    onMounted(){
        console.log("I am onMounted")
    }
}
</script>

<template>
    <div>
        <p class="greeting">{{ greeting + prop }}</p>
        <button @click="changeArray">添加</button>
        <span v-for="(item, index) in array" :key="index">${{ item }}$</span>
        <div ref="change">{{ changeStr }}</div>
    </div>
</template>

<style lang="scss" scoped>
    .greeting {
        color: red;
        font-weight: bold;
    }
</style>