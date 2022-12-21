/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import App from './App.vue' // Components
import { createApp } from 'vue' // Composables
import { registerPlugins } from '@/plugins' // Plugins
import './style/index.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
