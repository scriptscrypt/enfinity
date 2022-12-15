import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import { createApp } from 'vue'
import App from './App.vue'
import "./globalStyles.css"

const app = createApp(App)
app.use(VueCollapsiblePanel).mount('#app')
