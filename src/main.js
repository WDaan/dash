import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import '@babel/polyfill'

import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'
Vue.use(Toast)

import VueTailwind from 'vue-tailwind'
Vue.use(VueTailwind)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('@/components/', true, /\.vue$/i)
files.keys().map(key =>
    Vue.component(
        key
            .split('/')
            .pop()
            .split('.')[0],
        files(key).default
    )
)

const availableTiles = require
    .context('@/components/Tiles', true, /\.vue$/i)
    .keys()
    .map(
        key =>
            key
                .split('/')
                .pop()
                .split('.')[0]
    )

Vue.config.productionTip = false

window.vue = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        this.$store.commit('REGISTER_TILES', availableTiles)
    }
}).$mount('#app')
