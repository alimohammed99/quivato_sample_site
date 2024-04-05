import { createRouter, createWebHistory } from 'vue-router';

// Import our views
import HomeView from '@/views/HomeView.vue';
import OurServices from '@/views/OurServices.vue';
import ContactUs from '@/views/ContactUs.vue';


const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/services',
        name: 'OurServices',
        component: OurServices
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;