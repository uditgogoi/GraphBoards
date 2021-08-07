import dashboardRoutes from "@/modules/dashboard/routes";
export default [
    {
        path:'/login',
        component:()=>import("@/pages/login.vue")
    },
    {
        path:'/',
        name: "DashboardModule",
        component:()=>import("@/modules/dashboard/DashboardModule.vue"),
        children:[...dashboardRoutes]
    }
]