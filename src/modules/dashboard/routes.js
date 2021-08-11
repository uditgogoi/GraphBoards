export default [
    {
        path:'/',
        redirect:'home',
    },
    {
        path:'home',
        component:()=> import("./pages/Home.vue"),
    },
    {
        path:'create',
        component:()=> import("./pages/CreateDashboard.vue")
    }
]