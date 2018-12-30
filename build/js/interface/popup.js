import Settings from './components/Settings.vue'
import VendorSettings from "./components/VendorSettings.vue"
import AdequaButton from './components/AdequaButton.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Popup from './components/Popup.vue'
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Settings, props: true },
    { path: '/vendors', component: VendorSettings, props: true }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router,
    components: {
        AdequaButton,
        ButtonGroup
    },
    render: h => h(Popup)
}).$mount('#app')
