import { createRouter, createWebHistory } from "vue-router";

// Registro de componentes
import Mails from "../components/Mails/index.vue";
import Login from "../components/Login/index.vue";
import notFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "mails",
        component: Mails
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/:pathMatch(.*)*",
        component: notFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;