import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()
import './assets/main.css' // <-- Tailwind v4 import


app.use(router)
app.use(head)

app.mount('#app')
