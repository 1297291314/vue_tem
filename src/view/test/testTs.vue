<script lang="ts">
    import { defineComponent, reactive, toRefs, computed } from 'vue'
    export default defineComponent({
        name: 'testComponentName',
        setup() {
            const state: any = reactive({
                name: 'test',
                age: 18,
                test: 1,
                specialTag: computed(() => {
                    return state.age < 18 ? '未成年人' : '成年人'
                }),
            })
            const methods = {
                changeAge(par: Number) {
                    if (par > 0) {
                        state.age++
                    } else {
                        state.age--
                    }
                },
            }
            return {
                ...toRefs(state),
                ...methods,
            }
        },
    })
</script>
<template>
    <div class="testTs">
        <div>{{ name }}-{{ age }}-{{ specialTag }}</div>
        <button @click="changeAge(1)">点击+1</button>
        <button @click="changeAge(-1)">点击-1</button>
    </div>
</template>

<style lang="scss" scoped>
    .testTs {
        border: 1px solid #eaeaea;
    }
</style>