import { createApp } from 'vue'
import App from './App'
import router from '@/router/router';

// Connect PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'

// PrimeComponents
import Tree from 'primevue/tree';
import Button from 'primevue/button';

import '@/assets/main.css'

const app = createApp(App);

app.use(PrimeVue);

app
    .component('Tree', Tree)
    .component('Button', Button)

app
    .use(router)
    .mount('#app');
