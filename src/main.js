import Vue from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/nova-vue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Card from 'primevue/card';
import Message from 'primevue/message';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import '@/style/custom.css';
import 'primeflex/primeflex.css';
import Divider from 'primevue/divider';
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import TieredMenu from 'primevue/tieredmenu';
import VueApexCharts from 'vue-apexcharts'
Vue.config.productionTip = false
Vue.use(PrimeVue);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component('Dialog', Dialog);
Vue.component('Button', Button);
Vue.component('Rating', Rating);
Vue.component('Card', Card);
Vue.component('Message', Message);
Vue.component('InputText', InputText);
Vue.component('Menu', Menu);
Vue.component('Divider', Divider);
Vue.component('Menubar', Menubar);
Vue.component('Avatar', Avatar);
Vue.component('TieredMenu', TieredMenu);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
