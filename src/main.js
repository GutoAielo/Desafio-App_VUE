import { createApp } from 'vue'
import App from './App.vue'
import Primevue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import 'primevue/resources/themes/luna-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)

app.use(Primevue)
app.component('Butt', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.mount('#app')
