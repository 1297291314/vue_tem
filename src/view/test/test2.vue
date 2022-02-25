<script>
//  vue 基本版有setup写法
import { reactive, toRefs, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue'

import Test from './test.vue'
export default {
    name: 'testMySelf',
    components: {// 其他组件引用位置
        Test
    },
    props: { // 同vue2中写法，单独props添加
        name: {
            required: false,
            default: '未知'
        }
    },
    data () {
        return {
            message: 'Hello Vue3!'
        }
    },
    setup (props, context) {
        //  props==>调用组件传的参数值，父组件传递给子组件的所有数据。
        // context==>上下文

        console.log(1)
        console.log('props', props.name)
        console.log('context',context)

        const state = reactive({
            // name: "hujunjie",
            age: 18,
            sex: "男",
            specialTag: computed(() => {
                return state.age >= 18 ? '成年人' : '未成年人'
            })
        })

        const qq = ref("qq")
        onBeforeMount(() => {
            console.log('I am onBeforeMount')
        })
        onMounted(() => {
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
            testClick (par) {
                console.log(par)
                if (par > 0) {
                    state.age += 1
                } else {
                    state.age -= 1
                }
            }
        }
        return {
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