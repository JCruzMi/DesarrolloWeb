import About from './view/About.vue';
import Index from './view/Index.vue';
import App from './App.vue';
import Register from './view/Register.vue';
import Login from './view/Login.vue';

export default[
  {path : '/', component: app},
  {path : '/About', component: About},
  {path : '/Index', component: Index},
  {path : '/Register', component: Register},
  {path : '/Login', component: Login}

]
