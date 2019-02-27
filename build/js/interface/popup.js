import Settings from './components/Settings.vue'
import VendorSettings from "./components/VendorSettings.vue"
import AdequaButton from './components/AdequaButton.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Popup from './components/Popup.vue'
import Cookies from './components/Cookies.vue'
import Choices from './components/Choices.vue'
import Interests from './components/Interests.vue'
import Menu from './components/Menu.vue'
import ToggleButton from 'vue-js-toggle-button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faQuestionCircle)
library.add(faTimes)
library.add(faCheck)
library.add(faExternalLinkAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
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
        path: '/interests',
        component: Interests,
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
