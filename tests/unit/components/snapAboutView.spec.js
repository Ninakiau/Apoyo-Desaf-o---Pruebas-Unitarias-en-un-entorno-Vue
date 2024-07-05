import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

//Validación de match con el snapshot
describe('Vista Home', () => {
    //Se valida la similitud con el snapshot
    test('Validación de match con el snapshot', () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
