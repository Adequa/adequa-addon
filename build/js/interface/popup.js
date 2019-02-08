import Settings from './components/Settings.vue'
import VendorSettings from "./components/VendorSettings.vue"
import AdequaButton from './components/AdequaButton.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Popup from './components/Popup.vue'
import Cookies from './components/Cookies.vue'
import Choices from './components/Choices.vue'
import Desires from './components/Desires.vue'
import Menu from './components/Menu.vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
const routes = [
    {
        path: '/',
        component: Menu,
        props: true
    },
    {
        path: '/cookies',
        component: Cookies,
        props: true
    },
    {
        path: '/choices',
        component: Choices,
        props: true,
        children: [
            {
                path: '/',
                component: Settings
            },
            {
                path: 'vendors',
                component: VendorSettings
            }
        ]
    },
    {
        path: '/desires',
        component: Desires,
        props: true
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    components: {
        AdequaButton,
        ButtonGroup,
    },
    render: h => h(Popup)
}).$mount('#app');
