import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './tailwind.css'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
