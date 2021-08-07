export default [
    {
        path:'/',
        redirect:'home',
    },
    {
        path:'home',
        component:()=> import("./pages/Home.vue"),
    }
]