import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import vueSmoothScroll from 'vue2-smooth-scroll';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import {createProvider} from './vue-apollo'

import VueAnalytics from 'vue-analytics';
import router from './router'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(vueSmoothScroll);
Vue.use(VueAnalytics, {
    id: 'UA-100011338-2'
});

new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    apolloProvider: createProvider(),
    router,
    render: h => h(App)
}).$mount('#main');
