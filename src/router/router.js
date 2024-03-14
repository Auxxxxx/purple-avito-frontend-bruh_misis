import { createRouter, createWebHistory } from "vue-router";

import AdminPage from "@/pages/AdminPage";
import LoginForm from "@/pages/LoginForm";
import PriceMatrix from "@/pages/PriceMatrix";
import Analytics from "@/pages/Analytics";
import ProfilePage from "@/pages/ProfilePage";
import MessagePage from '@/pages/MessagePage';

const routes = [
    {
        path: '/',
        component: LoginForm
    },
    {
        path: '/admin',
        component: AdminPage
    },
    {
        path: '/priceMatrix',
        component: PriceMatrix
    },
    {
        path: '/analytics',
        component: Analytics
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/message',
        component: MessagePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;