import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes"
import VueSplide from '@splidejs/vue-splide';


const app = createApp(App);

app.use(router);
app.use(VueSplide);
app.mount('#app')
