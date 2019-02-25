import Vue from "vue";
import './plugins/vuetify'
import * as firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import { store } from "./store/index";
import DateFilter  from './filters/date';
import { createDecipher } from "crypto";

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyDTqT3qN7VKi6mk_nFRc2Xb_DXuQfHp7hM",
      authDomain: "devmeetup-b20a3.firebaseapp.com",
      databaseURL: "https://devmeetup-b20a3.firebaseio.com",
      projectId: "devmeetup-b20a3",
      storageBucket: "devmeetup-b20a3.appspot.com",
    })    
  }
}).$mount("#app");

