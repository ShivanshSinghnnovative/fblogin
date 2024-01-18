import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'
import './index.css'
import router from './routes';
import '@fortawesome/fontawesome-free/css/all.css';

library.add(faFacebook , faInstagram);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

