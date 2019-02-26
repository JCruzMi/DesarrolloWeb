import Index from './view/Index.vue';
import App from './App.vue';
import Register from './view/Register.vue';
import Login from './view/Login.vue';
import User from './view/User.vue';


export default[
  {path : '/', component: Index},
  {path : '/Register', component: Register},
  {path : '/Login', component: Login},
  {path : '/User', component: User}

]
