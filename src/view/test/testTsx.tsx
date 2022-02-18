import { defineComponent, onBeforeMount, computed, reactive, toRefs } from "vue"

export default defineComponent({
    name: "testTsx",
    setup() {
        const state = reactive({
            name: "I belive you",
            age: 18,
            specialTag: computed(() => {
                return state.age >= 18 ? "成年人" : "未成年人"
            })
        })
        const methods = {
            changeAge(param) {
                return () => {
                    if (param > 0) {
                        state.age++
                    } else {
                        state.age--
                    }
                }

            }
        }
        toRefs(state)
        return () => (
            <>
                <div>{state.name}-{state.age}-{state.specialTag}</div>
                <div>
                    花有重开日，人无在少年。莫负韶华<br />
                    <button onClick={methods.changeAge(1)}>点击+1</button>
                    <button onClick={methods.changeAge(-1)}>点击-1</button>
                </div>
            </>
        )
    }
})