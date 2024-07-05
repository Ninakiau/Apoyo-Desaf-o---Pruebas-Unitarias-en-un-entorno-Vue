import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

//Probando la existencia del componente o vista AboutView
describe('AboutView', () => { 

    //Se describe el comportamiento de la prueba
    test('Probando la existencia del componente o vista AboutView ', async () => {
        //Se crea el enrutador
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutViewVue',
                component: AboutView
            }],
        })
        //Se redirecciona al enrutador
        router.push('/about')
        await router.isReady()
        //Se renderiza la vista
        const wrapper = mount(AboutView, {
            global: {   
                plugins: [router]
            }
        })
        //Se valida la existencia de la vista
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)    
    })
 })