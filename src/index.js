import { createApp } from 'vue';
import router from './router';
import model from './model';
import App from './App.vue';

console.log('import.meta.env', import.meta.env);

const app = createApp(App);

app.use(router);
app.use(model);
app.mount('#app');
