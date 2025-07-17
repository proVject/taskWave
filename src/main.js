import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n, {loadLocaleMessages} from './plugins/i18n.js'


(async() => {
    const savedLocale = localStorage.getItem('locale') || 'en';
    await loadLocaleMessages(savedLocale)

    const app = createApp(App)
    app.use(i18n)
    app.mount('#app')
})()

