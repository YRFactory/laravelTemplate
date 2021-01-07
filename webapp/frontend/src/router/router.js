import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Register from '../components/Register';
import Todo from '../components/Todo';    //追加

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Register
        },
        {
            path: '/todo',    //追加
            component: Todo
        }
    ]
})