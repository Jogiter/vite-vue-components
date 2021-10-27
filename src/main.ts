import compapi from '@vue/composition-api';
import Vue from 'vue';
import { createApp } from '@vue/composition-api';
import App from './App.vue'

Vue.use(compapi)

createApp(App).mount('#app')
