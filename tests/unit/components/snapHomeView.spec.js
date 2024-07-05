import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

//Validación de match con el snapshot
describe('Vista Home', () => {
    //Se valida la similitud con el snapshot
    test('Validación de match con el snapshot', () => {
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
