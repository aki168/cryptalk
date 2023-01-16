import App from './App.vue' // Components
import { createApp } from 'vue' // Composables
import { registerPlugins } from '@/plugins' // Plugins
import './style/index.css'
import router from './router'

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
