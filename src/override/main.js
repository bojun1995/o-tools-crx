import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import '@/style/base/globalStyle.scss'
import '@/assets/fonts/install.css'
// json editor
import 'jsoneditor/dist/jsoneditor.min.css'
// icon
import 'remixicon/fonts/remixicon.css'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
