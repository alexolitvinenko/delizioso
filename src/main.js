import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components/UI'
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app
    .use(pinia)
    .use(router)
    .mount('#app');