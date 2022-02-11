<script lang="ts">
    import { ref, computed, watch, onMounted, defineComponent, PropType } from 'vue'

    interface Student {
        name: string
        class: string
        age: number
    }

    defineComponent({
        props: {
            // success: { type: String },
            // callback: {
            //     type: Function as PropType<() => void>,
            // },
            student: {
                type: Object as PropType<Student>,
                required: true,
            },
        },
        data() {
            return {
                message: 'Vue3 code style',
            }
        },
        computed: {
            reversedMessage(): string {
                return this.message.split(' ').reverse().join('')
            },
        },
    })
</script>

<template>
    <div>{{ message + student.name }}</div>
</template>

<style type="scss">
</style>