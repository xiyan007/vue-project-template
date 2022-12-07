import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

console.log('import.meta.env', import.meta.env);

const app = createApp(App);

app.use(router);
app.mount('#app');
