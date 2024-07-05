import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue'

//Probando la existencia del componente o vista ContactView
describe('ContactView', () => { 
    //Se describe el comportamiento de la prueba
    test('Probando la existencia del componente o vista ContactView ', async () => {
        //Se crea el enrutador
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/contact',
                name: 'ContactViewVue',
                component: ContactView
            }],
        })
        //Se redirecciona al enrutador
        router.push('/contact')
        await router.isReady()
        //Se renderiza la vista
        const wrapper = mount(ContactView, {
            global: {   
                plugins: [router]
            }
        })
        //Se valida la existencia de la vista
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)    
    })
 })