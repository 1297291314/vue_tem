<script>
    import { reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
    export default {
        name: 'component_name',
        setup() {
            // reactive 数据双向绑定
            const state = reactive({
                id: 1,
                name: '',
                num: computed(() => (state.id += 5)), //计算属性
            })
            // 方法
            const methods = {
                change1() {},
                change2() {},
            }
            //页面加载完成
            onMounted(() => {})
            //销毁
            onUnmounted(() => {})
            return {
                // toRefs转换为响应式数据
                ...toRefs(state),
                ...methods,
            }
        },
    }
</script>

<template>
    <div>{{ id }}--{{ name }}--{{ num }}</div>
</template>

<style lang="scss">
</style>