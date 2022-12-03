import { createWebHistory, createRouter } from "vue-router";

const routes = [
{
    path: "/",
    name: "homepage",
    component: () => import("./components/HomePage.vue")
},    
{
    path: "/aboutMe",
    name: "aboutMe",
    component: () => import("./components/AboutMe.vue")
},  
{
    path: "/resume",
    name: "resume",
    component: () => import("./components/MyResume.vue")
},  
{
    path: "/skill-showcase",
    name: "skillShowcase",
    component: () => import("./components/ClickerGame.vue")
},    
{
    path: "/contactForm",
    alias: "/contactForm",
    name: "contact-form-add",
    component: () => import("./components/ContactForm.vue")
},
{
    // default router, handles 404 errors
    path: "/:pathMatch(.*)*",
    component: () => import("./components/NotFound.vue")
}


// more routes go here.

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;