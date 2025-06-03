import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

createApp(App)
    .use(router)
    .mount('#app')
