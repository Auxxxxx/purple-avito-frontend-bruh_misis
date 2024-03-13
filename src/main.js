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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import '@/assets/main.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app
    .component('Tree', Tree)
    .component('Button', Button)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('InputText', InputText)
    .component('InputNumber', InputNumber)  
    .component('Calendar', Calendar)
    .component('Toast', Toast)

app
    .use(router)
    .mount('#app');
