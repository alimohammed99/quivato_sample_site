// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const app = createApp(App)

// app.use(router)

// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

// Import Bootstrap's JavaScript
import 'bootstrap'

// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Use VueLazyload with default options
const app = createApp(App)
app.use(router)
app.use(VueLazyload)

app.mount('#app')