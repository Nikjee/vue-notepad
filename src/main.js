import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'

import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.component('Button', Button)
app.component('Textarea', Textarea)
app.component('Card', Card)

app.mount('#app')
