// vue3+tsx模版
import { defineComponent, defineProps, onBeforeMount, computed, reactive, toRefs, ref, toRef } from "vue"
interface CPageOptions {
    realName?: String
}
export default defineComponent<CPageOptions>({
    name: "testTsx",

    setup(props, context) {
        const { slots, attrs, emit } = context
        let { realName } = attrs
        console.log('props', props)
        console.log('context', attrs)
        //  context 里有slots,attrs,emits
        const state = reactive({
            // name: "I belive you",
            age: 18,
            specialTag: computed(() => {
                return state.age >= 18 ? "成年人" : "未成年人"
            })
        })
        let stateNormal: number = 1
        const methods = {
            changeAge(param) {
                return () => {
                    if (param > 0) {
                        state.age++
                        stateNormal++
                    } else {
                        state.age--
                        stateNormal--
                    }
                }

            }
        }
        // toRefs(state)
        return () => (
            <>
                <div>{state.name}-{state.age}-{state.specialTag}::{stateNormal + realName}</div>
                <div>
                    花有重开日，人无在少年。莫负韶华<br />
                    <button onClick={methods.changeAge(1)}>点击+1</button>
                    <button onClick={methods.changeAge(-1)}>点击-1</button>
                </div>
            </>
        )
    }
})