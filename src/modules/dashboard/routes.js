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
    }, {
        path:'demo/:id',
        name:'Demo',
        component:()=>import("./pages/Demo.vue")
    }
]