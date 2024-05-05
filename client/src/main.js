import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/stores/langI18n.js'

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import * as firebase from "firebase/app";
import 'firebase/auth';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcGBkk5GX0TfTy8YWdUX82PnHSjV8p3h0",
  authDomain: "gasyr-lab-project.firebaseapp.com",
  projectId: "gasyr-lab-project",
  storageBucket: "gasyr-lab-project.appspot.com",
  messagingSenderId: "773443778708",
  appId: "1:773443778708:web:63bf7b4166e3f560b59c81"
};

firebase.initializeApp(firebaseConfig);


const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VCalendar, {})
app.use(i18n)

app.mount('#app')
