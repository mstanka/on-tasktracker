import { createApp } from 'vue';
import store from './store/index.js';
import App from './App.vue';
import './style/index.css';

const app = createApp(App);

app.use(store);
app.mount('#app');
