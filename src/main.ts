import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'ag-grid-community/styles/ag-grid.css'; // ag-Grid 기본 스타일
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Alpine 테마 스타일



createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
