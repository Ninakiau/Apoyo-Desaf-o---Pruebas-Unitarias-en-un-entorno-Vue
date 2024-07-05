import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'


//Probando la existencia del componente o vista PostsView
describe('PostsView', () => { 
    //Se describe el comportamiento de la prueba
    test('Probando la existencia del componente o vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })
        //Se redirecciona al enrutador
        router.push('/posts')
        await router.isReady()
        //Se renderiza la vista
        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })
        //Se valida la existencia de la vista
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })  
 })