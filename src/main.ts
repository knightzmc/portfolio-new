import Vue from 'vue'
import './plugins/fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import vueSmoothScroll from 'vue2-smooth-scroll';

import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(vueSmoothScroll);


new Vue({
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#main');
