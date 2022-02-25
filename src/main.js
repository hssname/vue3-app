import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

// createApp(App).mount('#app')
import useElement from '@/assets/js/element.js';
const app = createApp(App)
useElement(app)
app.use(router).mount('#app')
