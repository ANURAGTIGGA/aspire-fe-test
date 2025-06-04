import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './scss/styles.scss';
import { createPinia } from 'pinia';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(bootstrap)
    .mount('#app')
